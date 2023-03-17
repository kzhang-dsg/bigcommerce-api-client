export interface RedirectsQueryParams {
    site_id?: number;
    "id:in"?: string[];
    sort?: string;
    direction?: string;
    include?: string[];
    keyword?: string;
}
export interface DeleteRedirectsQueryParams {
    "id:in"?: string[];
    site_id?: number;
}
