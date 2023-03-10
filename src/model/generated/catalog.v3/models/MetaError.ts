/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorAdditional } from './ErrorAdditional';
import type { ErrorBasic } from './ErrorBasic';

export type MetaError = Array<(ErrorBasic & ErrorAdditional)>;
