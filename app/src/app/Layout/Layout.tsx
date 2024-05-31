import { Container } from './components/Container'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Outlet } from 'react-router-dom'
import './Layout.css'

export const Layout = () => {
    return <>
        <Header />
        <Main>
            <Container>
                <Outlet />
            </Container>
        </Main>
        <Footer />
    </>
}