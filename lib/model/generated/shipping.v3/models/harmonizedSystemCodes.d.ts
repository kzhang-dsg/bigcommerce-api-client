/**
 * Key value pair commonly used in the form of **countryISO2:'/^[0-9A-Za-z]{6,14}$/'**. This is to represent a country and the associated `hs_code` that applies to that country. Eg {"US":"508313","AU":"850610"}.
 *
 * There is a special value of **'ALL'**, which can be used in place of the countryISO2 to represent that the `hs_code` applies to all countries. Eg {"ALL":"634000"}. This can be combined with other countries in the `hs_code` object, for example {"All":"640000", "US":"641000"}.
 */
export type harmonizedSystemCodes = {};
