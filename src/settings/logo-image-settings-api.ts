import FormData from "form-data";
import { ReadStream } from "fs";
import { ApiClient } from "../api-client";

export class LogoImageSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createLogoImage(
        image: ReadStream,
        channelId?: number
    ): Promise<void> {
        const formData = new FormData();
        formData.append("LogoFile", image);
        const response = await this.apiClient.post(
            `/v3/settings/logo/image${
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
