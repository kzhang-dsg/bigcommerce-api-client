import { ApiClient } from "../api-client";
import { PlacementApi } from "./placement-api";
import { RegionApi } from "./region-api";
import { WidgetApi } from "./widget-api";
import { WidgetTemplateApi } from "./widget-template-api";

export class WidgetsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly placement = new PlacementApi(this.apiClient);
    readonly regions = new RegionApi(this.apiClient);
    readonly widget = new WidgetApi(this.apiClient);
    readonly widgetTemplate = new WidgetTemplateApi(this.apiClient);
}
