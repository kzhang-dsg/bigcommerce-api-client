import FormData from "form-data";
import { ReadStream } from "fs";
import { ApiClient } from "../api-client";
import { ChannelIdQueryParams } from "../model/common";
import { appendQueryString } from "../util";

export class LogoImageSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createLogoImage<Params extends ChannelIdQueryParams>(
        image: ReadStream,
        params?: Params
    ): Promise<void> {
        const formData = new FormData();
        formData.append("LogoFile", image);
        const response = await this.apiClient.post(
            appendQueryString(`/v3/settings/logo/image`, params),
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
