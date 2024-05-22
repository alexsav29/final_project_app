import { observer } from 'mobx-react-lite';
import { catalogStore } from '../../../catalog/components/CatalogList/stores/CatalogListStore';
import './WishListItem.css'
// import { wishListStore } from '../../stores/WishListStore';
import { Product } from '../../../../common/models/Product';

type WishListItemProps = {
    product: Product;
}

export const WishListItem = observer(({product}: WishListItemProps) => {
    const wishStatus = product?.isFavourite;

    const { toggleToWishList } = catalogStore;

    return <>
        <div onClick={() => {toggleToWishList(product); console.log(wishStatus)}} className={`add__to-wishlist__btn ${wishStatus ? 'favourite__product' : ''}`}></div>
    </>
})


