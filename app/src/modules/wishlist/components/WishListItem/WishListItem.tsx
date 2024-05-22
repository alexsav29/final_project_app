import { observer } from 'mobx-react-lite';
import { catalogStore } from '../../../catalog/components/CatalogList/stores/CatalogListStore';
import './WishListItem.css'
import { wishListStore } from '../../stores/WishListStore';
import { Product } from '../../../../common/models/Product';

type WishListItemProps = {
    product: Product;
}

export const WishListItem = observer(({product}: WishListItemProps) => {
    // let { catalogListDataState } = catalogStore;

    // const handleToggleToWishlist = (productId: number) => {
    //     catalogListDataState = catalogListDataState?.map((product) => {
    //         if (product.id === productId) {
    //             product.isFavourite = !product.isFavourite;
    //             console.log(product.isFavourite);
                
    //         };

    //         return product;
    //     })
    // };

    // return <>
    //     <div onClick={() => handleToggleToWishlist(productId)} className={`add__to-wishlist__btn ${wishState ? 'favourite__product' : ''}`}></div>
    // </>

    const wishStatus = product?.isFavourite;

    const { toggleToWishList } = wishListStore;

    return <>
        <div onClick={() => toggleToWishList(product)} className={`add__to-wishlist__btn ${wishStatus ? 'favourite__product' : ''}`}></div>
        
    </>
})


