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
exports.BlogPostApi = void 0;
const util_1 = require("../util");
class BlogPostApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllBlogPosts(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v2/blog/posts", params), page, limit);
            return response.data;
        });
    }
    createBlogPost(blogPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v2/blog/posts", blogPost);
            return response.data;
        });
    }
    deleteBlogPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete("/v2/blog/posts");
        });
    }
    getBlogPost(blogPostId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/blog/posts/${blogPostId}`);
            return response.data;
        });
    }
    updateBlogPost(blogPostId, blogPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/blog/posts/${blogPostId}`, blogPost);
            return response.data;
        });
    }
    deleteBlogPost(blogPostId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/blog/posts/${blogPostId}`);
        });
    }
    getBlogPostsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v2/blog/posts/count");
            return response.data;
        });
    }
}
exports.BlogPostApi = BlogPostApi;
