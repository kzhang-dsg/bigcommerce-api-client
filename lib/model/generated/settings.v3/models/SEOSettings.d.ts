export type SEOSettings = {
    meta_description?: string;
    meta_keywords?: string;
    page_title?: string;
    www_redirect?: SEOSettings.www_redirect;
};
export declare namespace SEOSettings {
    enum www_redirect {
        WWW = "www",
        NO_WWW = "no-www",
        NONE = "none"
    }
}
