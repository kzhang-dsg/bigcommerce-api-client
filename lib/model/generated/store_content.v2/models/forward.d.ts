export type forward = {
    /**
     * The type of redirect. If it is a `manual` redirect then type will always be manual. Dynamic redirects will have the type of the page. Such as product or category.
     */
    type?: string;
    /**
     * Reference of the redirect. Dynamic redirects will have the category or product number. Manual redirects will have the url that is being directed to.
     */
    ref?: number;
};
