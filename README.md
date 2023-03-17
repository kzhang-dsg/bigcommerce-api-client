# BigCommerce API Client

A TypeScript NodeJS client for all API endpoints of [BigCommerce's REST APIs](https://developer.bigcommerce.com/docs/rest).

- [BigCommerce API Client](#bigcommerce-api-client)
  - [Features](#features)
  - [Getting started](#getting-started)
    - [Installation](#installation)
    - [Basic Usage](#basic-usage)
  - [Advanced Usage](#advanced-usage)
    - [Pass Additional parameters](#pass-additional-parameters)
    - [Automatically Iterate Thru Pagination](#automatically-iterate-thru-pagination)
    - [Automatically Handle Large Batch](#automatically-handle-large-batch)
    - [Low Level API](#low-level-api)
  - [Configuration](#configuration)
  - [Error Handling](#error-handling)
  - [Versioning](#versioning)
  - [Support](#support)
  - [License](#license)

## Features

- One-to-one mapping to BigCommerce's Server Side APIs. The layout of the bigcommerce-api-client matches exactly as the [BigCommerce's REST APIs](https://developer.bigcommerce.com/docs/rest).
- The TypeScript typings (include all the models) are up-to-date and generated from [BigCommerce's API Spec Official GitHub repo](https://github.com/bigcommerce/api-specs) (with some patching).
- Automatic retry on errors with 429 and >=500 response codes.
- Can automatically iterate thru the pagination to get all the data in one call by passing `Limit.MAX_LIMIT` to the `limit` parameter
- Automatically split the large batch request into multiple smaller batch requests if the max batch size exceeded.
- Built in cache (in memory or redis)

## Getting started

### Installation

```sh
npm install bigcommerce-api-client
```

### Basic Usage

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

## Advanced Usage

### Pass Additional parameters

All the parameters are typed based on the BigCommerce API Spec. Passing additional parameters to the API is easy. For example:

```typescript
import { ProductsQueryParams } from "bigcommerce-api-client/lib/model/query/catalog";

const params: ProductsQueryParams = {
    "id:in": [1, 2, 3],
    availability: "availability",
    is_visible: true,
};
await bigCommerceApiClient.catalog.products.getAllProducts(params);

// or simply:
await bigCommerceApiClient.catalog.products.getAllProducts({
    "id:in": [1, 2, 3],
    availability: "availability",
    is_visible: true,
});
```

### Automatically Iterate Thru Pagination

API with pagination has two parameters `page` and `limit`. If you pass the the `Limit.MAX_LIMIT` to the `limit` parameter, the bigcommerce-api-client will automatically iterate thru all the pages from the starting page specified by the `page` parameter to the last page.

Example:

```typescript
import { Limit } from "bigcommerce-api-client/lib/model/common";

await bigCommerceApiClient.catalog.products.getAllProducts({}, 1, Limit.MAX_LIMIT);  // returns all the products from the first page to the last page
```

### Automatically Handle Large Batch

Some BigCommerce API support batch operations. For example, the [Update Products (Batch) API](https://developer.bigcommerce.com/docs/rest-management/catalog/products#update-products-batch) can update up to 10 products per request. The bigcommerce-api-client automatically handles the large batch payloads and splits it into multiple small batch requests. So the developer does not need to worry about the batch limits. For example, you can pass in 50 products to the Update Products (Batch) API, and the bigcommerce-api-client will split it into 5 requests, each request contains 10 products.

```typescript
const products: product_Base[] = [ ... 50 products];
await bigCommerceApiClient.catalog.products.batchUpdateProducts(products);
```

### Low Level API

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

- defaultLimit (default: `250`)
  - the global `limit` parameter value for pagination. The default value is 250, which means it will fetch 250 records per page. The `limit` parameter can be override at each API call level.
- timeout (default: `60000`)
  - Request timeout. Default is 1 minute
- maxRetries (default: `5`)
  - Max number of retries when error happened. Default is 5
- retryDelay (default: `5000`)
  - Wait time before next retry. Default is 5 seconds. The wait time for each retry is calculated by `retryDelay * nthRetry`. For example, if `retryDelay = 5000` and it is the 3rd retry, then wait for `5000 * 3 = 15000 ms`.
- retryOnReadTimeout (default: `true`)
  - If set to true, then retry when the request is timeout on a `GET` request.
- failOn404 (default: `false`)
  - If set to true, then throw error on 404 response code for a `GET` or `DELETE` request. Otherwise return `null`.
- cache
  - enable (default: `false`)
    - Enable cache or not.
  - ttl (default: `1000 * 60 * 10`)
    - Time-To-Live of the cache. Default is 10 min.
  - cloneData (default: `false`)
    - IN_MEMORY CACHE ONLY. Clone option to clone the response before saving it in cache. See [axios-cache-interceptor issue #163](https://github.com/arthurfiorette/axios-cache-interceptor/issues/163)
  - type (default: `CacheType.IN_MEMORY`)
    - Use `CacheType.IN_MEMORY` cache or `CacheType.REDIS` cache. For Redis cache, additional `redisClientOptions` is required
  - redisClientOptions (default: `undefined`)
    - The `RedisClientOptions` when initialize the redis client: `redis.createClient(options: RedisClientOptions)`. See [Redis documentation](https://docs.redis.com/latest/rs/references/client_references/client_nodejs/) for details.

## Error Handling

bigcommerce-api-client throws an error with a friendly error message when

- 4xx error, except
  - 429 error
  - 404 error if `config.failOn404 = false`
- Timeout
- Max retry reached

If you need to get the underlying axios error object, you just need to

```typescript
try {

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