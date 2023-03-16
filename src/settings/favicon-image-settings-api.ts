import FormData from "form-data";
import { ReadStream } from "fs";
import { ApiClient } from "../api-client";

export class FaviconImageSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createFaviconImage(
        image: ReadStream,
        channelId?: number
    ): Promise<void> {
        const formData = new FormData();
        formData.append("FaviconFile", image);
        const response = await this.apiClient.post(
            `/v3/settings/favicon/image${
                channelId ? "?channel_id=" + channelId : ""
            }`,
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
