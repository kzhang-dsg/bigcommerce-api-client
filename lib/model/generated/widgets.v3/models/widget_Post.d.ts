export type widget_Post = {
    /**
     * User friendly name.
     */
    name: string;
    /**
     * The user-friendly description.
     */
    description?: string;
    /**
     * The JSON data that populates the template.
     */
    widget_configuration?: any;
    /**
     * The widget template UUID.
     */
    widget_template_uuid: string;
    /**
     * The ID of the channel on which to create this widget. Defaults to the first channel created on the store.
     */
    channel_id?: number;
};
