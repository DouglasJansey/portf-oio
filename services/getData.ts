import { useQuery } from "@tanstack/react-query";
import { env } from "process";

const TOKEN_GIT = process.env.NEXT_PUBLIC_GIT_TOKEN 

const options = {
  headers: new Headers({
    Authorization: `token ${TOKEN_GIT}`,
    "Content-Type": "application/x-www-form-urlencoded",
  }),
};

export const GetLanguageData = async (data: []) => {
  const listObject = Object.values(data);
  const urlLoad = listObject.map(async (repo: any) => {
    const languages = await fetch(repo.languages_url, options).then((res) => res.json());
    const contributors = await fetch(repo.contributors_url, options).then((res) => res.json());

    return { repo, languages, contributors };
  });
  const results = await Promise.all(urlLoad);

  return results;
};


export const GetDataRepository = async (urlData: string) => {
  const response = await fetch(urlData);
  const data = await response.json();
  const newData = await GetLanguageData(data); // Supondo que você deseja chamar GetLanguageData aqui
  return newData; // Defina isPending como false, já que os dados foram carregados
};
