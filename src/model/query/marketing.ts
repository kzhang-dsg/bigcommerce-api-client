export interface BannersQueryParams {
    min_id?: number;
    max_id?: number;
}

export interface CouponsQueryParams {
    id?: string;
    code?: string;
    name?: string;
    type?: string;
    min_id?: number;
    max_id?: number;
    exclude_type?: string;
}

export interface GiftCertificatesQueryParams {
    min_id?: number;
    max_id?: number;
    code?: string;
    order_id?: string;
    to_name?: string;
    to_email?: string;
    from_name?: string;
    from_email?: string;
}
