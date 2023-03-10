export type ValidateCustomerCredentialsObject = {
    /**
     * Customer email address.
     */
    email: string;
    /**
     * Customer password.
     */
    password: string;
    /**
     * ChannelId to check the customer credentials against - If this field is empty we will use channel 1.
     */
    channel_id?: number;
};
