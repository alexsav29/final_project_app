import { observer } from "mobx-react-lite";
import { CatalogListItem } from "../catalog/components/CatalogList/components/CatalogListItem";
import { catalogStore } from "../catalog/components/CatalogList/stores/CatalogListStore"
import './WishList.css'
// import { CSSProperties } from "react";
// import { DotLoader } from "react-spinners";

export const WishList = observer(() => {
    const { wishListState, awaiting } = catalogStore;

    // const override: CSSProperties = {
    //     display: "block",
    //     margin: "100px auto",
    //     borderColor: "red",
    //     position: "absolute",
    //     zIndex: 1,
    // };

    return <>
        {/* <DotLoader
            className="loader"
            color={'#00B307'}
            loading={awaiting}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        /> */}

        {wishListState && wishListState.length === 0 && <h3 className="wishlist__empty">Список Избранных Товаров Пуст</h3>}
        {wishListState && wishListState.length > 0 && <div className="wish__list__items">
            {wishListState.map((wishProduct) => <div key={wishProduct.id} className="wishlist__item">
                <CatalogListItem catalogItem={wishProduct} />
            </div> )}
        </div>}
    </>
})