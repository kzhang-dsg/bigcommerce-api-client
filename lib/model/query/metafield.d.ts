import { FieldAwareQueryParams, IdAwareQueryParams } from "../common";
export interface GetAllMetafieldsQueryParams extends FieldAwareQueryParams, IdAwareQueryParams {
    key?: string;
    namespace?: string;
}
