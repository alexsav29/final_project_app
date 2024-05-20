import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { CatalogPageStore } from "./stores/CatalogPageStore";
import { cartStore } from "../../../../common/stores/CartStore";
import { catalogStore } from "../CatalogList/stores/CatalogListStore";
import { Image, Rate } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { WishListItem } from "../../../wishlist/components/WishListItem";
import { observer } from "mobx-react-lite";
import './CatalogPage.css'

export const CatalogPage = observer(() => {
    const [store] = useState(() => new CatalogPageStore());
    const { loadProduct, productDataState } = store;
    const { productId } = useParams();
    const { addToCart } = cartStore;

    
    
    
    
    const productRating: number = productDataState && +productDataState?.ProductRating.map((rate) => rate.ProductRating);
    const productCommentsCount: number = productDataState && +productDataState.ProductRating.map((rateItem) => rateItem.ProductRatingCount)
    const wishListState: boolean = productDataState && productDataState.isFavourite;
    console.log(wishListState);
   
    

    useEffect(() => {
        if (productId) {
            loadProduct(productId);
        }
    }, [productId]);

    const handleAddToCart = () => {
        addToCart(productDataState);
    };

    return <>
        {productDataState && 
        <div className="product__item">
            <p className="product__item__title">{productDataState.ProductName}</p>
            <div className="product__imgs">
                <div className="product__image__preview">
                    <Image width={300} className="product__item__image" src={productDataState.Image} />
                </div>
                {productDataState.Images.length > 1 && <div className="product__images__list">
                    <Image.PreviewGroup>
                        {productDataState.Images.map((image) => 
                            <Image 
                                width={150}
                                key={image}
                                className="product__images__list__item" 
                                src={image} 
                            />
                        )}
                    </Image.PreviewGroup>
                </div>}
            </div>
            <div className="product__buttons">
                <div onClick={handleAddToCart} className="add__to-cart__btn"></div>
                <WishListItem productId={productDataState.id} wishState={wishListState} />
            </div>
            <div className="product__info">
                <div className="product__info__left">
                    <p className="product__title">{productDataState.ProductName}</p>
                    <div className="product__price">
                        {productDataState.Price.map((price) => <p className="product__price__item" key={uuidv4()}>{price.Price}</p>)}
                        <p className="product__price__currency">&#36;</p>
                    </div>
                    <div className="product__rating">
                        <Rate className="product__rating__stars" allowHalf disabled={true} defaultValue={productRating} />
                        <div className="product__rating__comments">({productCommentsCount})</div>
                    </div>
                    <div className="product__description">{productDataState.description}</div>
                </div>
            </div>
        </div>}
    </>
})