import { catalogStore } from '../../../catalog/components/CatalogList/stores/CatalogListStore';
import './WishListItem.css'

type WishListItemProps = {
    productId: number;
    wishState: boolean;
}

export const WishListItem = ({productId, wishState}: WishListItemProps) => {
    let { catalogListDataState } = catalogStore;

    const handleToggleToWishlist = (productId: number) => {
        catalogListDataState = catalogListDataState?.map((product) => {
            if (product.id === productId) {
                product.isFavourite = !product.isFavourite;
                console.log(product.isFavourite);
                
            };

            return product;
        })
    };

    return <>
        <div onClick={() => handleToggleToWishlist(productId)} className={`add__to-wishlist__btn ${wishState ? 'favourite__product' : ''}`}></div>
    </>
}