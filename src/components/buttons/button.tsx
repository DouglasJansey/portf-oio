import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react"
import styled from './button.module.sass'
import Link from "next/link"

interface ButtonLinkProps {
    children: ReactNode,
    to: string
    target?: string
    download?: string
    style?: CSSProperties
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

export const ButtonLink = ({ children, to, target, download, style }: ButtonLinkProps) => {
    return (
        <Link
            className={styled.button}
            href={to}
            target={target}
            rel={target ? 'noopener noreferrer' : undefined}
            style={style}
            download={download}
        >
            {children}
        </Link>
    )
}

export const Button = ({ children, type = 'button', ...rest }: ButtonProps) => {
    return (
        <button type={type} className={styled.button} {...rest}>
            {children}
        </button>
    )
}
