'use client'
import style from './cardGitIcons.module.sass'
import { forks, issues, contributors, star } from '../../../../../imports/reactIcons'
import { ReactNode } from 'react'

interface GitCardIconProps {
    item: any

}
export default function CardGitIcon({ item }: GitCardIconProps) {
    const { value, name } = item
    const filterImageIcon = (name: string): ReactNode => {
        const icon = {
            fork: forks,
            issue: issues,
            star,
            contributors

        }
        return icon[name as keyof typeof icon]
    }
    return (
        <>
            <div className={style.flex}>
                <figure className={style.cardIcon}>
                    {filterImageIcon(name)}
                </figure>
                <h5 className={style.textValue}>
                    {value}
                </h5>
            </div>
        </>
    )
}