import type { ErrorAdditional } from './ErrorAdditional';
import type { ErrorBasic } from './ErrorBasic';
export type MetaError = (ErrorBasic & ErrorAdditional);
