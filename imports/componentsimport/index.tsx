import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import  CardSkill  from '../../src/components/skills/cardSkill';
import  CardProject  from '../../src/components/projects/CardProjects';
import  GitProject  from '../../src/components/projects/GitHubRepo';

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

interface GitProjectProps {
    name: string;
    url: string;
    language: {};
    desc: string;
    created_at: string;
    stars: number;
}

export const GitProjects = ({name, url, language, desc, created_at, stars}: GitProjectProps) =>{
    return(
        <GitProject name={name} url={url} language={language} desc={desc} created_at={created_at} stars={stars} />
    )
}