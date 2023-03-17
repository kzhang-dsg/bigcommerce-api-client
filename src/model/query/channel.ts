export interface ChannelsQueryParams {
    include?: string[];
    available?: boolean;
    "status:in"?: string[];
    "type:in"?: string[];
    "platform:in"?: string[];
    date_created?: string;
    "date_created:min"?: string;
    "date_created:max"?: string;
    date_modified?: string;
    "date_modified:min"?: string;
    "date_modified:max"?: string;
}

export interface ChannelListingsQueryParams {
    after?: number;
    "product_id:in"?: string[];
    date_created?: string;
    "date_created:min"?: string;
    "date_created:max"?: string;
    date_modified?: string;
    "date_modified:min"?: string;
    "date_modified:max"?: string;
}
