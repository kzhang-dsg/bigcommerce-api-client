export interface ChannelsQueryParams {
    include?: string[];
    available?: boolean;
    "status:in"?: string[];
    "type:in"?: string[];
    "platform:in"?: string[];
    date_created?: Date;
    "date_created:min"?: Date;
    "date_created:max"?: Date;
    date_modified?: Date;
    "date_modified:min"?: Date;
    "date_modified:max"?: Date;
}
export interface ChannelListingsQueryParams {
    after?: number;
    "product_id:in"?: string[];
    date_created?: Date;
    "date_created:min"?: Date;
    "date_created:max"?: Date;
    date_modified?: Date;
    "date_modified:min"?: Date;
    "date_modified:max"?: Date;
}
