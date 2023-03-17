"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreContentApi = void 0;
const blog_post_api_1 = require("./blog-post-api");
const blog_tag_api_1 = require("./blog-tag-api");
const page_api_1 = require("./page-api");
class StoreContentApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.blogPosts = new blog_post_api_1.BlogPostApi(this.apiClient);
        this.blogTags = new blog_tag_api_1.BlogTagApi(this.apiClient);
        this.pages = new page_api_1.PageApi(this.apiClient);
    }
}
exports.StoreContentApi = StoreContentApi;
