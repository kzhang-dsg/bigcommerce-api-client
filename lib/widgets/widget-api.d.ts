import { ApiClient } from "../api-client";
import { PaginatedData, Data } from "../model/common";
import { widget_Full, widget_Post, widget_Put } from "../model/generated/widgets.v3";
import { WidgetsQueryParams } from "../model/query/widget";
export declare class WidgetApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createWidget<T extends widget_Post, R extends widget_Full>(widget: T): Promise<Data<R>>;
    getAllWidgets<Params extends WidgetsQueryParams, T extends widget_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getWidget<T extends widget_Full>(widgetUuid: string): Promise<PaginatedData<T>>;
    updateWidget<T extends widget_Put, R extends widget_Full>(widgetUuid: string, widget: T): Promise<Data<R>>;
    deleteWidget(widgetUuid: string): Promise<void>;
}
