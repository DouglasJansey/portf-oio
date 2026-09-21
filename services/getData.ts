import 'server-only'

export interface GitHubRepo {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
  created_at: string;
  forks_count: number;
  open_issues: number;
  stargazers_count: number;
  languages_url: string;
  contributors_url: string;
}

export interface RepositoryData {
  repo: GitHubRepo;
  languages: Record<string, number>;
  contributors: unknown[];
}

const fetchJson = async <T>(url: string, options: RequestInit, fallback: T): Promise<T> => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
};

const GetLanguageData = async (
  repos: GitHubRepo[],
  options: RequestInit
): Promise<RepositoryData[]> =>
  Promise.all(
    repos.map(async (repo) => {
      const [languages, contributors] = await Promise.all([
        fetchJson<Record<string, number>>(repo.languages_url, options, {}),
        // contributors_url pode vir com template {/id}; o GitHub aceita a URL crua.
        fetchJson<unknown[]>(repo.contributors_url, options, []),
      ]);

      return {
        repo,
        languages,
        contributors: Array.isArray(contributors) ? contributors : [],
      };
    })
  );

export const GetDataRepository = async (
  urlData: string,
  options: RequestInit
): Promise<RepositoryData[]> => {
  const response = await fetch(urlData, options);

  if (!response.ok) {
    throw new Error(`GitHub respondeu ${response.status} para ${urlData}`);
  }

  const data = await response.json();

  // A API retorna um objeto (não um array) quando há erro ou rate limit.
  if (!Array.isArray(data)) {
    throw new Error("Resposta inesperada da API do GitHub.");
  }

  return GetLanguageData(data as GitHubRepo[], options);
};
