/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MetaPaginationObject = {
    pagination?: {
        count?: number;
        current_page?: number;
        links?: {
            current?: string;
            next?: string;
        };
        per_page?: number;
        total?: number;
        total_pages?: number;
    };
};

