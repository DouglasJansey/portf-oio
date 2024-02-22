import { ReactNode } from "react"
import styled from './button.module.sass'
import Link from "next/link"

interface ButtonProps {
    children: ReactNode,
    to: string
    target: string
    style?: {}
}
export const Button = ({children, to, target, style}:ButtonProps) => {
    return (
        <Link type='button' className={styled.button} href={to} target={target} style={style}>
            {children}
        </Link>
    )
}