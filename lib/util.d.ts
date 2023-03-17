import { DateFormat } from "./model/common";
export declare function appendQueryString(url: string, params?: Object, dateFormat?: DateFormat): string;
export declare function toQueryString(params?: Object, dateFormat?: DateFormat): string;
export declare function getCacheRegion(url?: string): string;
export declare function dateTransformer(data: string): any;
