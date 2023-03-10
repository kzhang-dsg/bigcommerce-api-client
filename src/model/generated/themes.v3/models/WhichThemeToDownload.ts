/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object specifying which theme to download. One of: `original`: the original Marketplace or uploaded custom theme; `last_activated`: the theme version most recently applied to the store; `last_created`: the theme version most recently created.
 */
export type WhichThemeToDownload = {
    /**
     * Which revision to use.
     */
    which?: WhichThemeToDownload.which;
};

export namespace WhichThemeToDownload {

    /**
     * Which revision to use.
     */
    export enum which {
        ORIGINAL = 'original',
        LAST_ACTIVATED = 'last_activated',
        LAST_CREATED = 'last_created',
    }


}

