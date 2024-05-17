const TOKEN = import.meta.env.GITHUB_TOKEN;

const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
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
};

type ApiResponse = {
  data: {
    user: {
      contributionsCollection: {
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
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: 0,
          weeks: [],
        },
      },
    },
  },
};

export async function getContributions(userName: string): Promise<ApiResponse> {
  const variables = `
  {
    "userName": "${userName}"
  }
`;
  const body = {
    query,
    variables,
  };
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });
  if (res.status !== 200) throw new Error("Failed to fetch data");
  return res.json();
}
