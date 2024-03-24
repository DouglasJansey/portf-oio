import { ButtonHTMLAttributes, ReactNode } from "react"
import styled from './button.module.sass'
import Link from "next/link"

interface ButtonLinkProps {
    children: ReactNode,
    to: string
    target?: string
    type: string
    style?: {}
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    style?: {}
}
export const ButtonLink = ({children,type, to, target, style}:ButtonLinkProps) => {
    return (
        <Link type={type || 'button'} className={styled.button} href={to} target={target} style={style}>
            {children}
        </Link>
    )
}
export const Button = ({children,type, style}:ButtonProps) => {
    return (
        <button type={type} className={styled.button} style={style}>
            {children}
        </button>
    )
}