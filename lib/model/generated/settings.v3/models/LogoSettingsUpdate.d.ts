export type LogoSettingsUpdate = {
    logo_text?: string;
    type?: LogoSettingsUpdate.type;
};
export declare namespace LogoSettingsUpdate {
    enum type {
        IMAGE = "image",
        TEXT = "text"
    }
}
