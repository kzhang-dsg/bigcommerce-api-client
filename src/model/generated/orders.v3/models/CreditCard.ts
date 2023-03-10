/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A credit-card model.
 */
export type CreditCard = {
    /**
     * **Allowed values**: alelo, alia, american_express, cabal, carnet, dankort, diners_club, discover, elo, forbrugsforeningen, jcb, maestro, master, naranja, sodexo, unionpay, visa, vr
     */
    card_type?: CreditCard.card_type;
    /**
     * The IIN of a credit-card number.
     *
     */
    card_iin?: string;
    /**
     * The last 4 digits of a credit-card number.
     *
     */
    card_last4?: string;
    /**
     * The expiry month of a credit-card.
     *
     */
    card_expiry_month?: number;
    /**
     * The expiry year of a credit-card.
     *
     */
    card_expiry_year?: number;
};

export namespace CreditCard {

    /**
     * **Allowed values**: alelo, alia, american_express, cabal, carnet, dankort, diners_club, discover, elo, forbrugsforeningen, jcb, maestro, master, naranja, sodexo, unionpay, visa, vr
     */
    export enum card_type {
        ALELO = 'alelo',
        ALIA = 'alia',
        AMERICAN_EXPRESS = 'american_express',
        CABAL = 'cabal',
        CARNET = 'carnet',
        DANKORT = 'dankort',
        DINERS_CLUB = 'diners_club',
        DISCOVER = 'discover',
        ELO = 'elo',
        FORBRUGSFORENINGEN = 'forbrugsforeningen',
        JCB = 'jcb',
        MAESTRO = 'maestro',
        MASTER = 'master',
        NARANJA = 'naranja',
        SODEXO = 'sodexo',
        UNIONPAY = 'unionpay',
        VISA = 'visa',
        VR = 'vr',
    }


}

