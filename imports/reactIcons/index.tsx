import { SiNextdotjs, SiTypescript, SiPrisma  } from "react-icons/si";
import { FaSass, FaNodeJs,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaCodeBranch  } from "react-icons/fa";

import { GrMysql } from "react-icons/gr";
import { VscIssues } from "react-icons/vsc";
import { HiOutlineUsers } from "react-icons/hi2";


import { BsArrowRight, BsStarFill } from "react-icons/bs";


const Githeight = 15
const height = 80
//===================git icons ==================
export const contributors = < HiOutlineUsers size={Githeight}/> ;
export const issues = < VscIssues size={Githeight}/> ;
export const forks = < FaCodeBranch size={Githeight}/> ;
export const star = <BsStarFill size={Githeight} /> ;
//============== language icons ===============
export const nextjs = < SiNextdotjs size={height}/> ;
export const typescript= <SiTypescript size={height} /> ;
export const sass= <FaSass size={height} /> ;
export const nodejs= < FaNodeJs size={height}/> ;
export const prisma= <SiPrisma  size={height} /> ;
export const mysql= <GrMysql size={height} /> ;
//===============arrow icon ===============================
export const arrowRight= <BsArrowRight size={20} /> ;
//================== social media icons =================
export const facebook= <FaFacebookSquare size={25} /> ;
export const instagram= <FaInstagram size={25} /> ;
export const linkedin= <FaLinkedin size={25} /> ;
export const github= <FaGithub size={25} /> ;