"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetsApi = void 0;
const placement_api_1 = require("./placement-api");
const region_api_1 = require("./region-api");
const widget_api_1 = require("./widget-api");
const widget_template_api_1 = require("./widget-template-api");
class WidgetsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.placement = new placement_api_1.PlacementApi(this.apiClient);
        this.regions = new region_api_1.RegionApi(this.apiClient);
        this.widget = new widget_api_1.WidgetApi(this.apiClient);
        this.widgetTemplate = new widget_template_api_1.WidgetTemplateApi(this.apiClient);
    }
}
exports.WidgetsApi = WidgetsApi;
