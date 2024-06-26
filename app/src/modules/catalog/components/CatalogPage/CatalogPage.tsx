import { CSSProperties, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CatalogPageStore } from "./stores/CatalogPageStore";
import { cartStore } from "../../../../common/stores/CartStore";
// import { catalogStore } from "../CatalogList/stores/CatalogListStore";
import { Image, Rate } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { WishListItem } from "../../../wishlist/components/WishListItem";
import { observer } from "mobx-react-lite";
import './CatalogPage.css'
import { DotLoader } from "react-spinners";

export const CatalogPage = observer(() => {
    const [store] = useState(() => new CatalogPageStore());
    const { loadProduct, productDataState, awaiting } = store;
    const { productId } = useParams();
    const { addToCart } = cartStore;
    
    const productRating: number | undefined = productDataState && +productDataState?.ProductRating.map((rate) => rate.ProductRating);
    const productCommentsCount: number | undefined = productDataState && +productDataState.ProductRating.map((rateItem) => rateItem.ProductRatingCount)
    const wishListState: boolean | undefined = productDataState && productDataState.isFavourite;
    console.log(wishListState);

    useEffect(() => {
        if (productId) {
            loadProduct(productId);
        }
    }, [productId]);

    const handleAddToCart = () => {
        addToCart(productDataState!);
    };

    const override: CSSProperties = {
        display: "block",
        margin: "100px auto",
        borderColor: "red",
        position: "absolute",
        zIndex: 1,
    };

    return <>
        <DotLoader
            className="loader"
            color={'#00B307'}
            loading={awaiting}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />

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
                <WishListItem product={productDataState} />
            </div>
            <div className="product__info">
                <div className="product__info__left">
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