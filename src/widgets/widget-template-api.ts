import { ApiClient } from "../api-client";
import { Data, Limit, PaginatedData } from "../model/common";
import {
    widgetTemplate_Full,
    widgetTemplate_Post,
    widgetTemplate_Put,
    WidgetTemplatePreviewResponse,
} from "../model/generated/widgets.v3";
import { WidgetTemplatesQueryParams } from "../model/query/widget";
import { appendQueryString } from "../util";

export class WidgetTemplateApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createWidgetTemplate<
        T extends widgetTemplate_Post,
        R extends widgetTemplate_Full
    >(widgetTemplate: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            "/v3/content/widget-templates",
            widgetTemplate
        );
        return response.data;
    }

    async getAllWidgetTemplates<
        Params extends WidgetTemplatesQueryParams,
        T extends widgetTemplate_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/content/widget-templates", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async renderWidgetTemplate<T extends WidgetTemplatePreviewResponse>(
        widgetTemplateUuid: string,
        widgetTemplatePreview: any
    ): Promise<T> {
        const response = await this.apiClient.post(
            `/v3/content/widget-templates/${widgetTemplateUuid}/preview`,
            widgetTemplatePreview
        );
        return response.data;
    }

    async getWidgetTemplate<T extends widgetTemplate_Full>(
        widgetTemplateUuid: string
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            `/v3/content/widget-templates/${widgetTemplateUuid}`
        );
        return response.data;
    }

    async updateWidgetTemplate<
        T extends widgetTemplate_Put,
        R extends widgetTemplate_Full
    >(widgetTemplateUuid: string, widgetTemplate: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/content/widget-templates/${widgetTemplateUuid}`,
            widgetTemplate
        );
        return response.data;
    }

    async deleteWidgetTemplate(widgetTemplateUuid: string): Promise<void> {
        await this.apiClient.delete(
            `/v3/content/widget-templates/${widgetTemplateUuid}`
        );
    }
}
