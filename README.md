# BigCommerce API Client

A TypeScript NodeJS client for [BigCommerce's REST APIs](https://developer.bigcommerce.com/docs/rest) with complete typing for API and models,  built-in cache and automatic retries. If you are looking for the BigCommerce OAuth Client for BigCommerce App development, Customer Logins, Verify Customer JWTs, you can try [BigCommerce OAuth Client](https://github.com/kzhang-dsg/bigcommerce-oauth-client).

- [BigCommerce API Client](#bigcommerce-api-client)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
  - [API Layout](#api-layout)
  - [Advanced Usage](#advanced-usage)
    - [Use typed query parameters](#use-typed-query-parameters)
    - [Automatically iterate thru pagination](#automatically-iterate-thru-pagination)
    - [Automatically handle large batch](#automatically-handle-large-batch)
    - [Automatic date conversion](#automatic-date-conversion)
    - [Enable cache](#enable-cache)
    - [Augment models](#augment-models)
    - [Low level API](#low-level-api)
  - [Configuration](#configuration)
  - [Error Handling](#error-handling)
  - [Versioning](#versioning)
  - [Support](#support)
  - [License](#license)

## Features

- One-to-one mapping to [BigCommerce's REST APIs](https://developer.bigcommerce.com/docs/rest). Very easy to use.
- All the API endpoints, models, and query parameters are fully typed. The typings are generated from [BigCommerce's API Spec official GitHub repo](https://github.com/bigcommerce/api-specs) (with patching).
- Automatically converts `string` date to `Date` object in models and query parameters.
- Automatic retry on errors with `429` and `5XX` response codes.
- Automatically iterate thru the pagination to get all the data if `limit = Limit.MAX_LIMIT`.
- Automatically split one large batch request into multiple smaller batch requests if the max batch size exceeded.
- Built in cache (support in memory or Redis)

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)

## Installation

```sh
npm install bigcommerce-api-client --save
```

## Basic Usage

```typescript
import { BigCommerceApiClient } from "bigcommerce-api-client";
import { PaginatedData } from "bigcommerce-api-client/lib/model/common";
import { product_Full } from "bigcommerce-api-client/lib/model/generated/catalog.v3";

const bigCommerceApiClient = new BigCommerceApiClient({
    storeHash: "xxxxxx",  // replace it with your store hash
    accessToken: "xxxxxx"  // replace it with your access token
});

// Example code to get products
const results: PaginatedData<product_Full> = await bigCommerceApiClient.catalog.products.getAllProducts();
console.log(JSON.stringify(results));

```

## API Layout

The bigcommerce-api-client has one-to-one mapping to the [BigCommerce API Reference Documentation](https://developer.bigcommerce.com/docs/rest). Developers can easily navigate thru and find the API endpoints:

![API Layout](doc/api-doc-mapping.png?raw=true "API Layout")

## Advanced Usage

### Use typed query parameters

All the parameters are typed based on the BigCommerce API Spec. The typescript type definitions for query parameters are located in `bigcommerce-api-client/lib/model/query/` folder. Passing additional parameters to the API is easy. For example:

```typescript
import { ProductsQueryParams } from "bigcommerce-api-client/lib/model/query/catalog";

const params: ProductsQueryParams = {
    "id:in": [1, 2, 3],
    availability: "available",
    is_visible: true,
};
await bigCommerceApiClient.catalog.products.getAllProducts(params);

// or simply:
await bigCommerceApiClient.catalog.products.getAllProducts({
    "id:in": [1, 2, 3],
    availability: "available",
    is_visible: true,
});
```

### Automatically iterate thru pagination

API with pagination has two parameters `page` and `limit`. If you pass the the `Limit.MAX_LIMIT` to the `limit` parameter, the bigcommerce-api-client will automatically iterate thru all the pages from the starting page specified by the `page` parameter to the last page.

Example:

```typescript
import { Limit } from "bigcommerce-api-client/lib/model/common";

await bigCommerceApiClient.catalog.products.getAllProducts({}, 1, Limit.MAX_LIMIT);  // returns all the products from the first page to the last page
```

### Automatically handle large batch

Some BigCommerce API support batch operations. For example, the [Update Products (Batch) API](https://developer.bigcommerce.com/docs/rest-management/catalog/products#update-products-batch) can update up to 10 products per request. The bigcommerce-api-client automatically handles the large batch payloads and splits it into multiple small batch requests. So the developer does not need to worry about the batch limits. For example, you can pass in 50 products to the Update Products (Batch) API, and the bigcommerce-api-client will split it into 5 requests, each request contains 10 products.

```typescript
const products: product_Base[] = [ ... 50 products];
await bigCommerceApiClient.catalog.products.batchUpdateProducts(products);
```

### Automatic date conversion

bigcommerce-api-client will automatically convert the ISO 8601 datetime string to the Date object for the requests and responses. If the date field is in `YYYY-MM-DD` format without timezone information, then it will convert it to the local time using the system's time zone settings. Please make sure the system's time zone is correctly configured.

### Enable cache

Cache is disabled by default. To enable cache, set `config.cache.enable = true` when creating the BigCommerceApiClient instance.

```typescript
import { BigCommerceApiClient } from "bigcommerce-api-client";

const bigCommerceApiClient = new BigCommerceApiClient({
    storeHash: "xxxxxx",  // replace it with your store hash
    accessToken: "xxxxxx",  // replace it with your access token
    cache: {
        enable: true
    }
});
```

you can also dynamically enable or disable caches on the fly after the bigCommerceApiClient is created:

```typescript
bigCommerceApiClient.cacheDefault.enable = true;  // enable or disable cache on the fly
bigCommerceApiClient.cacheDefault.ttl = 1000 * 60 * 15;  // change the ttl of the cache. Note: this does not affect the objects already in the cache
```

### Augment models

If you want to pass in additional parameters, or add extra fields to the models, you can define your own type to extend the existing model and add extra fields. For example:

```typescript
type CustomProduct = {extra_field: string} & product_Full;

const result: Data<CustomProduct> = await bigCommerceApiClient.catalog.products.getProduct(1);
console.log(JSON.stringify(result.data.extra_field));
```

### Low level API

If you need to directly call the `get`, `post` `put` `delete` methods with a custom URL and custom parameter, you can get the `bigCommerceApiClient.apiClient` object and call the corresponding method. For example:

```typescript
bigCommerceApiClient.apiClient.put("/some/custom/url", {
    key: value
});
```

## Configuration

When creating the bigcommerce-api-client instance, you can pass in additional configuration:

```typescript
import { BigCommerceApiClient } from "bigcommerce-api-client";

const bigCommerceApiClient = new BigCommerceApiClient({
    storeHash: "xxxxxx",  // replace it with your store hash
    accessToken: "xxxxxx",  // replace it with your access token
    defaultLimit: 250,  // the global `limit` parameter value for pagination. Default is 250 (fetch 250 records per page).
    timeout: 60000,  // request timeout. Default is 1 minute
    maxRetries: 5,  // max number of retries. Default is 5
    retryDelay: 5000,  // Wait time before next retry. Default is 5 seconds.
                       // the wait time for each retry is calculated by retryDelay * nthRetry.
                       // For example, if retryDelay=5000 and it is the 3rd retry, then wait for 5000*3=15000 ms.
    retryOnReadTimeout: true,  // If set to true, then retry when the request is timeout on a GET request. Default is true.
    failOn404: false,  // If set to true, then throw error on 404 response code for a GET or DELETE request. Otherwise return null. Default is false.
    cache: {
        enable: false,  // Enable cache or not. Default is false
        ttl: 1000 * 60 * 10, // TTL of the cache.
        cloneData: false, // IN_MEMORY CACHE ONLY. Clone option to clone the response before saving it in cache. See https://github.com/arthurfiorette/axios-cache-interceptor/issues/163
        type: CacheType.IN_MEMORY  // Either IN_MEMORY or REDIS
    }
});

```

Below is the complete list of config parameters:

- `defaultLimit` (default value: `250`)
  - the global `limit` parameter value for pagination. The default value is 250, which means it will fetch 250 records per page. The `limit` parameter can be override at each API call level.
- `timeout` (default: `60000`)
  - Request timeout. Default is 1 minute
- `maxRetries` (default: `5`)
  - Max number of retries when error happened. Default is 5
- `retryDelay` (default: `5000`)
  - Wait time before next retry. Default is 5 seconds. The wait time for each retry is calculated by `retryDelay * nthRetry`. For example, if `retryDelay = 5000` and it is the 3rd retry, then wait for `5000 * 3 = 15000 ms`. For `429` errors, the wait time is indicated by `X-Rate-Limit-Time-Reset-Ms` response header. See the [BigCommerce Document](https://developer.bigcommerce.com/api-docs/getting-started/best-practices#playing-nicely-with-the-platform) for details.
- `retryOnReadTimeout` (default: `true`)
  - If set to true, then retry when the request is timeout on a `GET` request.
- `failOn404` (default: `false`)
  - If set to true, then throw error on 404 response code for a `GET` or `DELETE` request. Otherwise return `null`.
- `cache`
  - `enable` (default: `false`)
    - Enable cache or not.
  - `ttl` (default: `1000 * 60 * 10`)
    - Time-To-Live of the cache. Default is 10 min.
  - `cloneData` (default: `false`)
    - IN_MEMORY CACHE ONLY. Clone option to clone the response before saving it in cache. See [axios-cache-interceptor issue #163](https://github.com/arthurfiorette/axios-cache-interceptor/issues/163)
  - `type` (default: `CacheType.IN_MEMORY`)
    - Use `CacheType.IN_MEMORY` cache or `CacheType.REDIS` cache. For Redis cache, additional `redisClientOptions` is required
  - `redisClientOptions` (default: `undefined`)
    - REDIS CACHE ONLY. The `RedisClientOptions` when initialize the redis client: `redis.createClient(options: RedisClientOptions)`. See [Redis documentation](https://docs.redis.com/latest/rs/references/client_references/client_nodejs/) for details.

## Error Handling

bigcommerce-api-client throws an error with a friendly error message when

- 4xx error, except for
  - 429 error if `maxRetries` is not reached yet
  - 404 error if `config.failOn404 = false`
- Timeout
- Max retry reached on 429 error and 5XX errors

If you need to get the underlying axios error object, you just need to

```typescript
try {
    // call bigcommerceApiClient
} catch (err) {
    let axiosError = err.cause; // the axios error object is in the error cause
    let request = axiosError.request;
    let response = axiosError.response;
}
```
For more information, see [Axios Error Handling](https://axios-http.com/docs/handling_errors).


## Versioning

This project strictly follows [Semantic Versioning](http://semver.org/).

## Support

If you have a problem with this library, please file an [issue](https://github.com/kzhang-dsg/bigcommerce-api-client/issues/new) here on GitHub.


## License

MIT