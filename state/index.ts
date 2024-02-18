import {create, } from 'zustand';


type statsProps = {
imgIndex: number,
cardPosition: number,
setIndexImage: (num: number) => void
setCardPosition: (num: number) => void
}

export const changeState = create<statsProps>((set) => ({
imgIndex: 0,
cardPosition: 0,
setIndexImage: (value) => set(() => ({imgIndex: value})),
setCardPosition: (value) => set(() => ({cardPosition: value})) 
}))
