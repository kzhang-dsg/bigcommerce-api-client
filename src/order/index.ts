import { ApiClient } from "../api-client";
import { OrderStatus } from "../model/common";
import {
    ordersCount_Full,
    order_Post,
    order_Put,
    order_RespOnly,
} from "../model/generated/orders.v2.oas2";
import { OrdersQueryParams } from "../model/query/order";
import { appendQueryString } from "../util";
import { OrderCouponApi } from "./order-coupon-api";
import { OrderMessageApi } from "./order-message-api";
import { OrderProductApi } from "./order-product-api";
import { OrderShipmentApi } from "./order-shipment-api";
import { OrderShippingAddressApi } from "./order-shipping-address-api";
import { OrderShippingAddressQuoteApi } from "./order-shipping-address-quote-api";
import { OrderStatusApi } from "./order-status-api";
import { OrderTaxApi } from "./order-tax-api";

export class OrderApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly orderCoupons = new OrderCouponApi(this.apiClient);
    readonly orderMessages = new OrderMessageApi(this.apiClient);
    readonly orderProducts = new OrderProductApi(this.apiClient);
    readonly orderShipments = new OrderShipmentApi(this.apiClient);
    readonly orderShippingAddresses = new OrderShippingAddressApi(
        this.apiClient
    );
    readonly orderShippingAddressQuotes = new OrderShippingAddressQuoteApi(
        this.apiClient
    );
    readonly orderStatus = new OrderStatusApi(this.apiClient);
    readonly orderTaxes = new OrderTaxApi(this.apiClient);

    async getAllOrders<
        Params extends OrdersQueryParams,
        T extends order_RespOnly
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v2/orders", params),
            page,
            limit
        );
        return response.data;
    }

    async createOrder<T extends order_Post, R extends order_RespOnly>(
        order: T
    ): Promise<R> {
        const response = await this.apiClient.post("/v2/orders", order);
        return response.data;
    }

    async getOrder<T extends order_RespOnly>(orderId: number): Promise<T> {
        const response = await this.apiClient.get(`/v2/orders/${orderId}`);
        return response.data;
    }

    async updateOrder<T extends order_Put, R extends order_RespOnly>(
        orderId: number,
        order: T
    ): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/orders/${orderId}`,
            order
        );
        return response.data;
    }

    async archiveOrder(orderId: number): Promise<void> {
        await this.apiClient.delete(`/v2/orders/${orderId}`);
    }

    async deleteAllOrders(): Promise<void> {
        await this.apiClient.delete(`/v2/orders`);
    }

    async getOrdersCount<T extends ordersCount_Full>(): Promise<T> {
        const response = await this.apiClient.get("/v2/orders/count");
        return response.data;
    }

    async updateOrderStatus<T extends order_RespOnly>(
        orderId: number,
        status: OrderStatus
    ): Promise<T> {
        const order: order_Put = {
            status_id: status,
        };

        return await this.updateOrder(orderId, order);
    }
}
