import { ApiClient } from "../api-client";
import { taxClass_Full } from "../model/generated/tax_classes.v2";

export class TaxClassesApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllTaxClasses<T extends taxClass_Full>(
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            "/v2/tax_classes",
            page,
            limit
        );
        return response.data;
    }

    async getTaxClass<T extends taxClass_Full>(taxClassId: number): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/tax_classes/${taxClassId}`
        );
        return response.data;
    }
}
