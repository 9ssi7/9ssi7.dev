const TOKEN = process.env.GITHUB_TOKEN;

const query = `
query($from:DateTime!, $to:DateTime!) {
  viewer {
    contributionsCollection(from: $from, to: $to) {
      totalCommitContributions
      restrictedContributionsCount
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
        }
      }
    }
  }
}
`;

type ContributionDay = {
  contributionCount: number;
  date: string;
  color: string;
};

type ApiResponse = {
  data: {
    viewer: {
      contributionsCollection: {
        restrictedContributionsCount: number;
        totalCommitContributions: number;
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: ContributionDay[];
          }[];
        };
      };
    };
  };
};

export const emptyApiResponse: ApiResponse = {
  data: {
    viewer: {
      contributionsCollection: {
        restrictedContributionsCount: 0,
        totalCommitContributions: 0,
        contributionCalendar: {
          totalContributions: 0,
          weeks: [],
        },
      },
    },
  },
};

export async function getContributions(userName: string): Promise<ApiResponse> {
  const lastYearOfToday = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());
  const today = new Date();
  const variables = `
  {
    "from": "${lastYearOfToday.toISOString()}",
    "to": "${today.toISOString()}"
  }
`;
  const body = {
    query,
    variables,
  };
  const uniqueAgent = `9ssi7dev (https://9ssi7.dev) ${Math.random()}`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "User-Agent": uniqueAgent,
    },
    body: JSON.stringify(body),
  });
  if (res.status !== 200) throw new Error("Failed to fetch data");
  return res.json();
}
