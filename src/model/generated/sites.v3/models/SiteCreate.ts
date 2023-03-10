/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CertificateWrite } from './CertificateWrite';

export type SiteCreate = {
    /**
     * The Fully Qualified URL (including host and scheme) where this site is hosted. All URLs generated for this site will be appended to this.
     */
    url?: string;
    /**
     * The channel this site is attached to. Each site belongs to a single channel, and each channel can have either zero or one sites.
     */
    channel_id?: number;
    certificate?: CertificateWrite;
};

