import FormData from "form-data";
import { ReadStream } from "fs";
import { ApiClient } from "../api-client";
import { ChannelIdQueryParams } from "../model/common";
import { appendQueryString } from "../util";

export class FaviconImageSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createFaviconImage<Params extends ChannelIdQueryParams>(
        image: ReadStream,
        params?: Params
    ): Promise<void> {
        const formData = new FormData();
        formData.append("FaviconFile", image);
        const response = await this.apiClient.post(
            appendQueryString(`/v3/settings/favicon/image`, params),
            formData,
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );
        return response.data;
    }
}
