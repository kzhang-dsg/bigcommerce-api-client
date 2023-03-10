/**
 * A simple string/type response for returning information.
 */
export type Message = {
    text: string;
    type: Message.type;
};
export declare namespace Message {
    enum type {
        INFO = "INFO",
        WARNING = "WARNING",
        ERROR = "ERROR"
    }
}
