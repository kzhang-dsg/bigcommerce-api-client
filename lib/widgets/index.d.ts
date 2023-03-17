import { ApiClient } from "../api-client";
import { PlacementApi } from "./placement-api";
import { RegionApi } from "./region-api";
import { WidgetApi } from "./widget-api";
import { WidgetTemplateApi } from "./widget-template-api";
export declare class WidgetsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly placement: PlacementApi;
    readonly regions: RegionApi;
    readonly widget: WidgetApi;
    readonly widgetTemplate: WidgetTemplateApi;
}
