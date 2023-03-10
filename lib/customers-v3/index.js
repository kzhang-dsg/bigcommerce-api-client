"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersV3Api = void 0;
const util_1 = require("../util");
const customer_address_api_1 = require("./customer-address-api");
const customer_attribute_api_1 = require("./customer-attribute-api");
const customer_attribute_value_api_1 = require("./customer-attribute-value-api");
const customer_consent_api_1 = require("./customer-consent-api");
const customer_form_field_value_api_1 = require("./customer-form-field-value-api");
const customer_setting_api_1 = require("./customer-setting-api");
const customer_setting_channel_api_1 = require("./customer-setting-channel-api");
const MAX_BATCH_SIZE = 10;
class CustomersV3Api {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.customerAddresses = new customer_address_api_1.CustomerAddressApi(this.apiClient);
        this.customerAttributeValues = new customer_attribute_value_api_1.CustomerAttributeValueApi(this.apiClient);
        this.customerAttributes = new customer_attribute_api_1.CustomerAttributeApi(this.apiClient);
        this.customerConsent = new customer_consent_api_1.CustomerConsentApi(this.apiClient);
        this.customerFormFieldValues = new customer_form_field_value_api_1.CustomerFormFieldValueApi(this.apiClient);
        this.customerSettings = new customer_setting_api_1.CustomerSettingsApi(this.apiClient);
        this.customerSettingsChannel = new customer_setting_channel_api_1.CustomerSettingsChannelApi(this.apiClient);
    }
    getAllCustomers(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/customers", params), page, limit);
            return response.data;
        });
    }
    createCustomers(customers) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let result = { data: [], meta: {} };
            for (let i = 0; i < customers.length; i += MAX_BATCH_SIZE) {
                const response = yield this.apiClient.post("/v3/customers", customers.slice(i, i + MAX_BATCH_SIZE));
                (_a = result.data) === null || _a === void 0 ? void 0 : _a.concat(response.data.data);
            }
            return result;
        });
    }
    updateCustomers(customers) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let result = { data: [], meta: {} };
            for (let i = 0; i < customers.length; i += MAX_BATCH_SIZE) {
                const response = yield this.apiClient.put("/v3/customers", customers.slice(i, i + MAX_BATCH_SIZE));
                (_a = result.data) === null || _a === void 0 ? void 0 : _a.concat(response.data.data);
            }
            return result;
        });
    }
    deleteCustomers(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete((0, util_1.appendQueryString)("/v3/customers", params));
        });
    }
}
exports.CustomersV3Api = CustomersV3Api;
