import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Layout'
import { Home } from '../modules/home'
import { Cart } from '../modules/cart'
import { Comments } from '../modules/comments'
import { Order } from '../modules/order'
import { Result } from '../modules/result'
import { AboutUs } from '../modules/aboutus'
import { WishList } from '../modules/wishlist'
import { Catalog } from '../modules/catalog'
import { Post } from '../modules/post'
import { Contacts } from '../modules/contacts'
import { Sign } from '../modules/sign'
import { History } from '../modules/history'
import { Account } from '../modules/account'
import { Faqs } from '../modules/faqs'
import { Terms } from '../modules/terms'
import { Privacy } from '../modules/privacy'
import { SuperProduct } from '../modules/superProduct'
import { Tracking } from '../modules/tracking'
import { News } from '../modules/news'

export const App = () => {
    return <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/catalog/*' element={<Catalog />} />
                <Route path='/post/*' element={<Post />} />
                <Route path='/comments' element={<Comments />} />
                <Route path='/news' element={<News />} />
                <Route path='/result' element={<Result />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/wishlist' element={<WishList />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/sign/*' element={<Sign />} />
                <Route path='/history' element={<History />} />
                <Route path='/account' element={<Account />} />
                <Route path='/faqs' element={<Faqs />} />
                <Route path='/termsandconditions' element={<Terms />} />
                <Route path='/privacypolicy' element={<Privacy />} />
                <Route path='/superproduct' element={<SuperProduct />} />
                <Route path='/tracking' element={<Tracking />} />
                <Route path='/order' element={<Order />} />
            </Route>
        </Routes>

    </>
}