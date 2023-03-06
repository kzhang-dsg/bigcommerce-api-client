"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReviewStatus = exports.ProductListShippingCalc = exports.NumberLimitMode = exports.FileTypesMode = exports.DateLimitMode = exports.ProductModifierType = exports.ProductBuckPricingRuleType = void 0;
var ProductBuckPricingRuleType;
(function (ProductBuckPricingRuleType) {
    ProductBuckPricingRuleType["PRICE"] = "price";
    ProductBuckPricingRuleType["PERCENT"] = "percent";
    ProductBuckPricingRuleType["FIXED"] = "fixed";
})(ProductBuckPricingRuleType = exports.ProductBuckPricingRuleType || (exports.ProductBuckPricingRuleType = {}));
var ProductModifierType;
(function (ProductModifierType) {
    ProductModifierType["DATE"] = "date";
    ProductModifierType["CHECKBOX"] = "checkbox";
    ProductModifierType["FILE"] = "file";
    ProductModifierType["TEXT"] = "text";
    ProductModifierType["MULTI_LINE_TEXT"] = "multi_line_text";
    ProductModifierType["NUMBERS_ONLY_TEXT"] = "numbers_only_text";
    ProductModifierType["RADIO_BUTTONS"] = "radio_buttons";
    ProductModifierType["RECTANGLES"] = "rectangles";
    ProductModifierType["DROPDOWN"] = "dropdown";
    ProductModifierType["PRODUCT_LIST"] = "product_list";
    ProductModifierType["PRODUCT_LIST_WITH_IMAGES"] = "product_list_with_images";
    ProductModifierType["SWATCH"] = "swatch";
})(ProductModifierType = exports.ProductModifierType || (exports.ProductModifierType = {}));
var DateLimitMode;
(function (DateLimitMode) {
    DateLimitMode["EARLIEST"] = "earliest";
    DateLimitMode["RANGE"] = "range";
    DateLimitMode["LATEST"] = "latest";
})(DateLimitMode = exports.DateLimitMode || (exports.DateLimitMode = {}));
var FileTypesMode;
(function (FileTypesMode) {
    FileTypesMode["SPECIFIC"] = "specific";
    FileTypesMode["ALL"] = "all";
})(FileTypesMode = exports.FileTypesMode || (exports.FileTypesMode = {}));
var NumberLimitMode;
(function (NumberLimitMode) {
    NumberLimitMode["LOWEST"] = "lowest";
    NumberLimitMode["RANGE"] = "range";
    NumberLimitMode["HIGHEST"] = "highest";
})(NumberLimitMode = exports.NumberLimitMode || (exports.NumberLimitMode = {}));
var ProductListShippingCalc;
(function (ProductListShippingCalc) {
    ProductListShippingCalc["NONE"] = "none";
    ProductListShippingCalc["WEIGHT"] = "weight";
    ProductListShippingCalc["PACKAGE"] = "package";
})(ProductListShippingCalc = exports.ProductListShippingCalc || (exports.ProductListShippingCalc = {}));
var ProductReviewStatus;
(function (ProductReviewStatus) {
    ProductReviewStatus[ProductReviewStatus["PENDING"] = 0] = "PENDING";
    ProductReviewStatus[ProductReviewStatus["APPROVED"] = 1] = "APPROVED";
})(ProductReviewStatus = exports.ProductReviewStatus || (exports.ProductReviewStatus = {}));
