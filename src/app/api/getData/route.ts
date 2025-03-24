
const TOKEN_GIT = process.env.NEXT_PUBLIC_GIT_TOKEN 

const options = {
  headers: new Headers({
    Authorization: `Bearer ${TOKEN_GIT}`,
    "Content-Type": "application/x-www-form-urlencoded",
  }),
};

export const GetLanguageData = async (data: []) => {
  const listObject = Object.values(data);
  const urlLoad = listObject.map(async (repo: any) => {
    try {
      const [languagesRes, contributorsRes] = await Promise.all([
        fetch(repo.languages_url, options).then((res) => res.json()),
        fetch(repo.contributors_url, options).then((res) => res.json())
      ]);

      return {
        repo,
        languages: languagesRes,
        contributors: contributorsRes,
      };
    } catch (error) {
      console.error(`Erro ao buscar dados do repositório ${repo.name}: `, error);
      return {
        repo,
        languages: [],
        contributors: [],
      };
    }
  });
  const results = await Promise.all(urlLoad);

  return results;
};


export const GetDataRepository = async (urlData: string) => {
  const response = await fetch(urlData);
  const data = await response.json();
  const newData = await GetLanguageData(data); 
  return newData;
};
