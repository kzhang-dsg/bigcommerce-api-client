/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * **Tab.** Use the **tab** settings type to create settings visible in Page Builder.
 */
export type widgetSchemaTab = {
    /**
     * The type of setting component to display.
     */
    type?: widgetSchemaTab.type;
    /**
     * The user-friendly message to inform the user how this setting will be used.
     */
    label?: string;
    /**
     * Groups of related settings.
     */
    sections?: Array<{
        /**
         * The user-friendly message to inform the user how this setting will be used.
         */
        label?: string;
        /**
         * For examples of schema settings, see [Widget UI Input Types](/stencil-docs/page-builder/schema-settings).
         */
        settings?: Array<{
            /**
             * The type of setting component to display. You can view the list of elements below to discover which are available to use.
             *
             * For examples of each type of setting, see [Page Builder > Schema Settings](/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs.
             */
            type?: 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';
            /**
             * The user friendly message to inform the user how this setting will be used.
             */
            label?: string;
            /**
             * The variable name where the setting value will be available in the widget template.
             */
            id?: string;
            /**
             * The default value to use when rendering the widget for the first time. Make sure to set sensible defaults to make your widget easier to use.
             */
            default?: string;
            /**
             * Additional information needed based on the selected setting type.
             */
            typeMeta?: {
                selectOptions?: Array<{
                    label?: string;
                    value?: string;
                }>;
            };
            /**
             * An optional property that can be added to each setting to control whether it should be displayed to the user while editing in Page Builder. This does not clear the value in the setting, just controls the display of the setting.
             */
            conditional?: {
                /**
                 * The ID of the `setting` object the conditional attribute is related to.
                 */
                key?: string;
                /**
                 * Specifies the operation used to determine whether to display the setting. The `IN` operator is currently the only supported operator. The setting will be displayed if the conditional’s `value` property is equal to the selected value of the `selectOptions`.
                 */
                operator?: string;
                /**
                 * A single-object array containing a value from the `typeMeta`'s `selectOptions`.
                 */
                value?: Array<any>;
            };
        }>;
    }>;
};

export namespace widgetSchemaTab {

    /**
     * The type of setting component to display.
     */
    export enum type {
        TAB = 'tab',
    }


}

