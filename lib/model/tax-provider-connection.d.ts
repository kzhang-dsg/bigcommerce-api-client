export interface ConnectionStatus {
    data: {
        username: string;
        configured: boolean;
    };
}
export interface ConnectionCredentials {
    username: string;
    password: string;
}
