import type { betaDetailedErrors } from './betaDetailedErrors';
import type { betaerror_Base } from './betaerror_Base';
export type betaerrorResponse_Full = (betaerror_Base & {
    errors?: betaDetailedErrors;
});
