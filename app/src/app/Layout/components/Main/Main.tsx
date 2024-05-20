import { ReactNode } from 'react'
import './Main.css'

type MainProps = {
    children: ReactNode;
}

export const Main = ({children}: MainProps) => {
    return <>
        {children}
    </>
}