export type Product = {
    id: number,
    ProductId: number,
    ProductName: string,
    category: string,
    description: string,
    ingredients: string | null,
    storageConditions: string,
    NetMeasure: string,
    PackagingInfo: string,
    Image: string,
    Images: string [],
    isFavourite: boolean,
    isNew: boolean,
    Price: PriceType [],
    ProductRating: ProductRatingType [],
    LegalInformation: LegalInformationType []
}

export type PriceType = {
    Price: number;
    PriceRed: number | null;
    PriceOld: number | null;
    Discount: number;
}

export type ProductRatingType = {
    ProductRating: number | null;
    ProductRatingCount: number | null;
}

export type LegalInformationType = {
    TrademarkName: string | null;
    CountryOfManufacture: string | null;
}