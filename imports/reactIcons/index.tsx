import { SiNextdotjs, SiTypescript, SiPrisma, SiReact , SiCsharp, SiTestinglibrary  } from "react-icons/si";
import Image from "next/image";
import {
    FaSass, FaNodeJs,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaLinkedinIn,
    FaFacebookF,
    FaGithub,
    FaCodeBranch
} from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

import { GrMysql } from "react-icons/gr";
import { VscIssues } from "react-icons/vsc";
import { HiOutlineUsers, HiPhone  } from "react-icons/hi2";
interface PropsCsharp {
        color: string;
        size: number; 
}

import { BsArrowRight, BsStarFill } from "react-icons/bs";
import zustandImage from '../../public/images/cardProject/zustand.png'

const Githeight = 15
const height = 80
//===================git icons ==================
export const contributors = < HiOutlineUsers size={Githeight} />;
export const issues = < VscIssues size={Githeight} />;
export const forks = < FaCodeBranch size={Githeight} />;
export const star = <BsStarFill size={Githeight} />;
export const email = <HiOutlineMail size={17}/>
export const phone = <HiPhone size={13}/>
//============== language icons ===============
export const nextjs = < SiNextdotjs size={height} />;
export const typescript = <SiTypescript size={height} />;
export const sass = <FaSass size={height} />;
export const nodejs = < FaNodeJs size={height} />;
export const prisma = <SiPrisma size={height} />;
export const mysql = <GrMysql size={height} />;
export const csharp= ({color, size}: PropsCsharp) => <SiCsharp size={size} color={color} />;
export const contextApi= ({color, size}: PropsCsharp) => <SiReact size={size} color={color} />;
export const zustandIcon = <Image src={zustandImage} alt="Zustand Icon" width={35} height={35} color="cyan"/>;
//===============arrow icon ===============================
export const arrowRight = <BsArrowRight size={20} />;
//================== social media icons sem retangulo =================
export const facebookF = <FaFacebookF size={18} />;
export const linkedIn = <FaLinkedinIn size={20} />;
export const instaFooter = <RiInstagramLine size={20} />;

//================== social media icons =================
export const facebook =  (value: number) => <FaFacebookSquare size={value} />;
export const linkedin =  (value: number) =><FaLinkedin size={value} />;
export const instagram = (value: number) => <FaInstagram size={value} />;
export const github = (value: number) => <FaGithub size={value} />;