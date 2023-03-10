/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Optional channel configuration object.
 */
export type ChannelConfigMeta = {
    /**
     * A [channel app](/api-docs/channels/overview#channel-apps) config object for optionally configuring the channelʼs user interface in the control panel.
     */
    app?: {
        /**
         * The unique `id` given to an app registered in [DevTools](https://devtools.bigcommerce.com/); used to create links to the app in channel manager. `app.id` is optional; however, if youʼre building an app that creates or manages a channel, we recommend including it to ensure the user interface in the control panel works properly. Select partners who are promoted in the Channel Manager must build an app, and include the app ID in the create channel request. [Learn how to find an Appʼs ID](/api-docs/apps/tutorials/id).
         */
        id?: number;
        /**
         * Sections are now deprecated under config_meta. The new /channel-menus endpoints should be used instead. If set, when the app is loaded within the control panel, the navigation `sections` will be directly embedded in the control panel navigation.
         * @deprecated
         */
        sections?: Array<{
            /**
             * The title of the navigation section.
             * @deprecated
             */
            title?: string;
            /**
             * The value that will be passed to the app's iFrame in the URL and will allow the app to display the appropriate section within the app iFrame in the control panel.
             * @deprecated
             */
            query_path?: string;
        }>;
    };
};

