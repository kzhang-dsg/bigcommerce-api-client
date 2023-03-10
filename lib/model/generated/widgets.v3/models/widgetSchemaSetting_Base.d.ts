import type { widgetSchemaConditional } from './widgetSchemaConditional';
/**
 * For examples of each type of setting, see [Page Builder > Schema Settings](/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs.
 */
export type widgetSchemaSetting_Base = {
    /**
     * The type of setting component to display. You can view the list of elements below to discover which are available to use.
     *
     * For examples of each type of setting, see [Page Builder > Schema Settings](/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs.
     */
    type?: widgetSchemaSetting_Base.type;
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
    conditional?: widgetSchemaConditional;
};
export declare namespace widgetSchemaSetting_Base {
    /**
     * The type of setting component to display. You can view the list of elements below to discover which are available to use.
     *
     * For examples of each type of setting, see [Page Builder > Schema Settings](/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs.
     */
    enum type {
        ALIGNMENT = "alignment",
        BOOLEAN = "boolean",
        BOX_MODEL = "boxModel",
        CODE = "code",
        COLOR = "color",
        IMAGE_MANAGER = "imageManager",
        INPUT = "input",
        NUMBER = "number",
        PRODUCT_ID = "productId",
        PRODUCT_IMAGE = "productImage",
        RANGE = "range",
        REGEX_INPUT = "regexInput",
        SELECT = "select",
        TEXT = "text",
        TOGGLE = "toggle"
    }
}
