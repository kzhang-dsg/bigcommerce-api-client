"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message;
(function (Message) {
    let type;
    (function (type) {
        type["INFO"] = "INFO";
        type["WARNING"] = "WARNING";
        type["ERROR"] = "ERROR";
    })(type = Message.type || (Message.type = {}));
})(Message = exports.Message || (exports.Message = {}));
