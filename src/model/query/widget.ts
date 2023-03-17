export interface PlacementsQueryParams {
    widget_template_kind?: string;
    template_file?: string;
    widget_uuid?: string;
    widget_template_uuid?: string;
    "channel_id:in"?: number[];
    "site_id:in"?: number[];
}

export interface WidgetsQueryParams {
    widget_template_kind?: string;
    widget_template_uuid?: string;
    name?: string;
    "name:in"?: string[];
    "channel_id:in"?: number[];
    "site_id:in"?: number[];
}

export interface WidgetTemplatesQueryParams {
    widget_template_kind?: string;
    "channel_id:in"?: number[];
}
