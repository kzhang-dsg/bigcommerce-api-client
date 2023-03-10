/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LogoSettings = {
    favicon_url?: string;
    logo_image_url?: string;
    logo_text?: string;
    type?: LogoSettings.type;
};

export namespace LogoSettings {

    export enum type {
        IMAGE = 'image',
        TEXT = 'text',
    }


}

