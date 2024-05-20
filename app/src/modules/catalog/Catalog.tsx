import { Route, Routes } from "react-router-dom"
import { CatalogList } from "./components/CatalogList"
import { CatalogPage } from "./components/CatalogPage"

export const Catalog = () => {
    return <Routes>
        <Route index element={<CatalogList />} />
        <Route path="/:productId" element={<CatalogPage />} />
    </Routes>
}