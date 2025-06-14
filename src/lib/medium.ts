export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
  thumbnail?: string;
}

export async function fetchMediumArticles(username: string): Promise<MediumArticle[]> {
  try {
    const rssUrl = `https://medium.com/feed/@${username}`;
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    const response = await fetch(proxyUrl);
    if (!response.ok) {
      console.error('Failed to fetch Medium RSS feed:', response.statusText);
      return [];
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok' || !data.items) {
      console.error('Invalid RSS feed response');
      return [];
    }
    
    return data.items.map((item: any) => {
      const thumbnail = extractThumbnail(item.description || item.content);
      
      return {
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || '',
        description: cleanDescription(item.description || ''),
        categories: item.categories || [],
        thumbnail
      };
    });
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
}

function extractThumbnail(content: string): string | undefined {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : undefined;
}

function cleanDescription(description: string): string {
  // Remove HTML tags
  const withoutTags = description.replace(/<[^>]*>/g, '');
  // Decode HTML entities
  const decoded = withoutTags
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
  // Trim and limit length
  return decoded.trim().slice(0, 200) + (decoded.length > 200 ? '...' : '');
}