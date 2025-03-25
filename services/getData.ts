const GetLanguageData = async (data: [], options: {}) => {
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
export const GetDataRepository = async (urlData: string, options: {}) => {
  const response = await fetch(urlData, options);
  const data = await response.json();
  const newData = await GetLanguageData(data, options); 
  return newData;
};