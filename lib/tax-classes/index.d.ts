import { ApiClient } from "../api-client";
import { taxClass_Full } from "../model/generated/tax_classes.v2";
export declare class TaxClassesApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllTaxClasses<T extends taxClass_Full>(page?: number, limit?: number): Promise<T[]>;
    getTaxClass<T extends taxClass_Full>(taxClassId: number): Promise<T>;
}
