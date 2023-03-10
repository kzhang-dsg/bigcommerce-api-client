/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InstalledCertificateDetail } from './InstalledCertificateDetail';

export type CertificateResponse = {
    data?: {
        status?: CertificateResponse.status;
        installed_certificate?: InstalledCertificateDetail;
    };
    meta?: any;
};

export namespace CertificateResponse {

    export enum status {
        SHARED = 'shared',
        DEDICATED = 'dedicated',
    }


}

