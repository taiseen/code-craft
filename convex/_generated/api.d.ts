/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as controllers_codeExecutions from "../controllers/codeExecutions.js";
import type * as controllers_http from "../controllers/http.js";
import type * as controllers_snippets from "../controllers/snippets.js";
import type * as controllers_users from "../controllers/users.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "controllers/codeExecutions": typeof controllers_codeExecutions;
  "controllers/http": typeof controllers_http;
  "controllers/snippets": typeof controllers_snippets;
  "controllers/users": typeof controllers_users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
