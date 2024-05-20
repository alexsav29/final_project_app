import { Image } from "antd";
import { Product } from "../../../../../../common/models/Product";
import { v4 as uuidv4 } from 'uuid';
import { Rate } from 'antd';
import './CatalogListItem.css'
import { WishListItem } from "../../../../../wishlist/components/WishListItem";
import { cartStore } from "../../../../../../common/stores/CartStore";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

type CatalogListItemProps = {
    catalogItem: Product;
}

export const CatalogListItem = observer(({catalogItem}: CatalogListItemProps) => {
    const { addToCart } = cartStore;

    const productRating: number = +catalogItem.ProductRating.map((rateItem) => rateItem.ProductRating);
    const productCommentsCount: number = +catalogItem.ProductRating.map((rateItem) => rateItem.ProductRatingCount)
    const wishListState: boolean = catalogItem.isFavourite;

    const handleAddToCart = () => {
        addToCart(catalogItem);
    };

    return <>
    <div className="product">
        <div className="product__img">
            <Image className="product__image" src={catalogItem.Image} />
        </div>
        <div className="product__info">
            <div className="product__info__left">
                <p className="product__title"><Link to={catalogItem.id.toString()}>{catalogItem.ProductName}</Link></p>
                <div className="product__price">
                    {catalogItem.Price.map((price) => <p className="product__price__item" key={uuidv4()}>{price.Price}</p>)}
                    <p className="product__price__currency">&#36;</p>
                </div>
                <div className="product__rating">
                    <Rate className="product__rating__stars" allowHalf disabled={true} defaultValue={productRating} />
                    <div className="product__rating__comments">({productCommentsCount})</div>
                </div>
            </div>
            <div className="product__info__right">
                <div onClick={handleAddToCart} className="add__to-cart__btn"></div>
                <WishListItem productId={catalogItem.id} wishState={wishListState} />
            </div>
        </div>
    </div>
    </>
    
})