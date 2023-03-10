/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * BC Meta payload for collection-type responses.
 */
export type IndexMeta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            previous?: string;
            current?: string;
            next?: string;
        };
    };
};

