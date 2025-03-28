import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import  CardSkill  from '../../src/components/skills/cardSkill';
import  CardProject  from '../../src/components/projects/CardProjects';
import  GitProject  from '../../src/components/projects/GitHubRepo';
import  LoadingCard  from '../../src/components/Loading';

interface CardProps {
    value: {
        name: string,
        exp: string,
        time: string
    },
    index: number,

}

export const Card = ({value, index }: CardProps) => {
    return(
        <CardSkill value={value} index={index} />
    )
}

interface CardProjectProps {
    value: {
        name: string;
        url: string;
        situation: string;
        role: string;
        desc: string;
        languages: {
              frontend: string[];
              backend: string[];
            }       
    },
}

export const CardProjects = ({value}: CardProjectProps) =>{
    return(
        <CardProject value={value} />
    )
}
interface GitIcon {
    value: number;
    name: string;
}
interface GitProjectProps {
    name: string;
    url: string;
    language: { [key: string]: number }; // Tipando o objeto de linguagens
    desc: string;
    created_at: string;
    gitIcons: GitIcon[];

}

export const GitProjects = ({name, url, language, desc, created_at, gitIcons}: GitProjectProps) =>{
    return(
        <GitProject name={name} url={url} language={language} desc={desc} created_at={created_at} gitIcons={gitIcons} />
    )
}

export const loading = <LoadingCard />