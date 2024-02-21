import { useQuery } from "@tanstack/react-query";

const options = {
  headers: new Headers({
    Authorization: "token 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",
    "Content-Type": "application/x-www-form-urlencoded",
  }),
};

export const GetLanguageData = async (data: []) => {
  const listObject = Object.values(data);
  const urlLoad = listObject.map(async (repo: any) => {
    const languages = await fetch(repo.languages_url, options).then((res) => res.json());
    return { repo, languages };
  });
  const results = await Promise.all(urlLoad);

  return results;
};

export const GetDataRepository = async (urlData: string) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(urlData, options).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  const result = await GetLanguageData(data);

  const newData = await Promise.all(result);

  if (error) return "Erro na url fornecida";

  return newData;
};
