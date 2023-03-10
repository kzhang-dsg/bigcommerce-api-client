/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocaleCollection } from './LocaleCollection';

/**
 * Data for updated template
 */
export type EmailTemplateUpdate = {
    body: string;
    translations?: LocaleCollection;
    subject: string;
};

