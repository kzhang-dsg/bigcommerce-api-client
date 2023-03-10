/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A simple string/type response for returning information.
 */
export type Message = {
    text: string;
    type: Message.type;
};

export namespace Message {

    export enum type {
        INFO = 'INFO',
        WARNING = 'WARNING',
        ERROR = 'ERROR',
    }


}

