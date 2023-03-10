import type { PreferredOutcome } from './PreferredOutcome';
import type { Reason } from './Reason';
export type GetReturnsSettings = {
    reasons?: Array<Reason>;
    preferred_outcomes?: Array<PreferredOutcome>;
};
