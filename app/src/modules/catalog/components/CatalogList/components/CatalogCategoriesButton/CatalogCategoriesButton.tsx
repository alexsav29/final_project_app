import { Button } from "antd"
import './CatalogCategoriesButton.css'

type CatalogCategoriesButtonProps = {
    catalogCategory: string;
}

export const CatalogCategoriesButton = ({catalogCategory}: CatalogCategoriesButtonProps) => {
    return  <Button className="category">{catalogCategory}</Button>
}