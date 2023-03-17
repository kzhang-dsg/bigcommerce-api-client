export interface WebhooksQueryParams {
    is_active?: boolean;
    scope?: string;
    destination?: string;
}

export interface WebhookEventsQueryParams {
    "created_at:max": string;
    "created_at:min": string;
}

export interface WebhookAdminsQueryParams {
    is_active?: boolean;
}
