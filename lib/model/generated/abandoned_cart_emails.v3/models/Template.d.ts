import type { TranslationDefinition } from './TranslationDefinition';
export type Template = {
    subject: string;
    body: string;
    translation?: Array<TranslationDefinition>;
};
