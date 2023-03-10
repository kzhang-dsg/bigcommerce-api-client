/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dateFormat } from './dateFormat';

export type timeZone = {
    /**
     * A string identifying the time zone, in the format: <Continent-name>/<City-name>.
     */
    name?: string;
    /**
     * A negative or positive number, identifying the offset from UTC/GMT, in seconds, during winter/standard time.
     */
    raw_offset?: number;
    /**
     * A negative or positive number, identifying the offset from UTC/GMT, in seconds, during summer/daylight saving time.
     */
    dst_offset?: number;
    /**
     * A boolean indicating whether this time zone observes daylight saving time.
     */
    dst_correction?: boolean;
    date_format?: dateFormat;
};

