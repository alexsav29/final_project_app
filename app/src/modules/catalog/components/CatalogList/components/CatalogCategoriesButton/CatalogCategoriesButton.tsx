import { Button } from "antd"
import './CatalogCategoriesButton.css'
import { catalogStore } from "../../stores/CatalogListStore";

type CatalogCategoriesButtonProps = {
    catalogCategory: string;
}

export const CatalogCategoriesButton = ({catalogCategory}: CatalogCategoriesButtonProps) => {
    const { loadingProductData } = catalogStore;

    const handleCategoryClick = (category: string) => {
        loadingProductData(category)
    }

    return  <Button onClick={() => handleCategoryClick(catalogCategory)} className="category">{catalogCategory}</Button>
}