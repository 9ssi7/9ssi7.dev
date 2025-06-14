export interface SpotifyShow {
  id: string;
  name: string;
  description: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  external_urls: {
    spotify: string;
  };
  publisher: string;
  total_episodes: number;
  explicit: boolean;
  languages: string[];
  episodes?: SpotifyEpisode[];
}

export interface SpotifyEpisode {
  id: string;
  name: string;
  description: string;
  release_date: string;
  duration_ms: number;
  external_urls: {
    spotify: string;
  };
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
}

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

async function getSpotifyAccessToken(): Promise<string | null> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
  if (!clientId || !clientSecret) {
    console.error('Spotify credentials not configured');
    return null;
  }
  
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    });
    
    if (!response.ok) {
      console.error('Failed to get Spotify access token:', response.statusText);
      return null;
    }
    
    const data: SpotifyTokenResponse = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    return null;
  }
}

type SpotifyShowsResponse = {
  shows: SpotifyShow[];
}

type SpotifyEpisodesResponse = {
  items: SpotifyEpisode[];
}

export async function fetchSpotifyShows(showIds: string[]): Promise<SpotifyShow[]> {
  try {
    const accessToken = await getSpotifyAccessToken();
    if (!accessToken) {
      return [];
    }
    
    const response = await fetch(`https://api.spotify.com/v1/shows?ids=${showIds.join(',')}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    
    if (!response.ok) {
      console.error('Failed to fetch Spotify shows:', response.statusText);
      return [];
    }
    
    const data: SpotifyShowsResponse = await response.json();
    const shows: SpotifyShow[] = data.shows || [];
    
    const showsWithEpisodes = await Promise.all(
      shows.map(async (show) => {
        try {
          const episodesResponse = await fetch(
            `https://api.spotify.com/v1/shows/${show.id}/episodes?limit=3`,
            {
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            }
          );
          
          if (episodesResponse.ok) {
            const episodesData: SpotifyEpisodesResponse = await episodesResponse.json();
            return {
              ...show,
              episodes: episodesData?.items || []
            };
          }
        } catch (error) {
          console.error(`Error fetching episodes for show ${show.id}:`, error);
        }
        return show;
      })
    );
    
    return showsWithEpisodes;
  } catch (error) {
    console.error('Error fetching Spotify shows:', error);
    return [];
  }
}

export async function fetchUserPodcasts(): Promise<SpotifyShow[]> {
  const podcastIds = process.env.SPOTIFY_PODCAST_IDS || ""
  const showIds = podcastIds?.split(',').map((id: string) => id.trim());
  return fetchSpotifyShows(showIds);
}

export function formatDuration(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}