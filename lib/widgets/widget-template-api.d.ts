import { ApiClient } from "../api-client";
import { PaginatedData, Data } from "../model/common";
import { WidgetTemplatePreviewResponse, widgetTemplate_Full, widgetTemplate_Post, widgetTemplate_Put } from "../model/generated/widgets.v3";
import { WidgetTemplatesQueryParams } from "../model/query/widget";
export declare class WidgetTemplateApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createWidgetTemplate<T extends widgetTemplate_Post, R extends widgetTemplate_Full>(widgetTemplate: T): Promise<Data<R>>;
    getAllWidgetTemplates<Params extends WidgetTemplatesQueryParams, T extends widgetTemplate_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    renderWidgetTemplate<T extends WidgetTemplatePreviewResponse>(widgetTemplateUuid: string, widgetTemplatePreview: any): Promise<T>;
    getWidgetTemplate<T extends widgetTemplate_Full>(widgetTemplateUuid: string): Promise<PaginatedData<T>>;
    updateWidgetTemplate<T extends widgetTemplate_Put, R extends widgetTemplate_Full>(widgetTemplateUuid: string, widgetTemplate: T): Promise<Data<R>>;
    deleteWidgetTemplate(widgetTemplateUuid: string): Promise<void>;
}
