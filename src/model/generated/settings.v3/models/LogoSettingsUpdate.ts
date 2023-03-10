/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LogoSettingsUpdate = {
    logo_text?: string;
    type?: LogoSettingsUpdate.type;
};

export namespace LogoSettingsUpdate {

    export enum type {
        IMAGE = 'image',
        TEXT = 'text',
    }


}

