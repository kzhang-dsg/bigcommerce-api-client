export interface SitesQueryParams {
    "channel_id:in"?: number[];
    "url_type:in"?: string[];
}

export interface SiteCertificatesQueryParams {
    "urls:in"?: string[];
}

export interface SiteRoutsQueryParams {
    type?: string;
}
