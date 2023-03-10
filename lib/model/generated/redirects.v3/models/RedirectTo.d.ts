export type RedirectTo = {
    type?: RedirectTo.type;
    entity_id?: number;
    url?: string;
};
export declare namespace RedirectTo {
    enum type {
        PRODUCT = "product",
        BRAND = "brand",
        CATEGORY = "category",
        PAGE = "page",
        POST = "post",
        URL = "url"
    }
}
