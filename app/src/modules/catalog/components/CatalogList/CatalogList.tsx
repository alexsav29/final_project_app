import { CSSProperties, useEffect } from "react";
import { catalogStore } from "./stores/CatalogListStore";
import { observer } from "mobx-react-lite";
import './CatalogList.css'
import { CatalogListItem } from "./components/CatalogListItem";
import { CatalogCategoriesButton } from "./components/CatalogCategoriesButton";
import { DotLoader } from "react-spinners";

export const CatalogList = observer(() => {
    const { loadingProductData, awaiting, loadingCategoriesData, catalogListDataState, categoriesState, allCategories } = catalogStore;

    useEffect(() => {
        loadingCategoriesData();
        // console.log(categoriesState);
    }, []);

    useEffect(() => {
        if (allCategories) {
            loadingProductData();
            // console.log(catalogListDataState);
        }
    }, [allCategories])

    const override: CSSProperties = {
        display: "block",
        margin: "100px auto",
        borderColor: "red",
        position: "absolute",
        zIndex: 1,
      };

    return <>
        <div className="categories">
            {allCategories && allCategories.map((category) => <CatalogCategoriesButton key={category} catalogCategory={category} />)}
        </div>

        <DotLoader
            className="loader"
            color={'#00B307'}
            loading={awaiting}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />

        <div className="products">
            {catalogListDataState && catalogListDataState.length > 0 && catalogListDataState.map((product) => 
                <CatalogListItem key={product.id} catalogItem={product} />
            )}
        </div>
    </>
})