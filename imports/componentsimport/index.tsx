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
export const Card = ({value, index }: CardProps) => {
    return(
        <CardSkill value={value} index={index} />
    )
}
export const CardProjects = ({value}: CardProjectProps) =>{
    return(
        <CardProject value={value} />
    )
}
export const GitProjects = () =>{
    return(
        <GitProject  />
    )
}