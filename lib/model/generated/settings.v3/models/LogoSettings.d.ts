export type LogoSettings = {
    favicon_url?: string;
    logo_image_url?: string;
    logo_text?: string;
    type?: LogoSettings.type;
};
export declare namespace LogoSettings {
    enum type {
        IMAGE = "image",
        TEXT = "text"
    }
}
