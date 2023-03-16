export interface StoreLogsQueryParams {
    type?: string;
    "type:not"?: string;
    module?: string;
    "module:not"?: string;
    severity?: number;
    "severity:min"?: number;
    "severity:max"?: number;
    "id:in"?: number[];
}
