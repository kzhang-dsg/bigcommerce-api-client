/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details about the Channel's relationship to Themes.
 */
export type ActiveTheme = {
    /**
     * The UUID of the currently active Theme on the Channel.
     */
    active_theme_uuid?: string;
    /**
     * The UUID of the currently active Theme Configuration on the Channel.
     */
    active_theme_configuration_uuid?: string;
    /**
     * The UUID of the currently active Theme Version on the Channel. Needed to look up the available Custom Templates for the Theme.
     */
    active_theme_version_uuid?: string;
    /**
     * The UUID of the most recently saved Theme Configuration. If this is different from the active Theme Configuration UUID, this indicates that some changes have been saved in the control panel Theme Editor that have not yet been published.
     */
    saved_theme_configuration_uuid?: string;
};

