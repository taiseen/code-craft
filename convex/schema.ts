import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

    // 🟩🟩🟩 user schema for database...
    users: defineTable({
        userId: v.string(), // clerkId
        email: v.string(),
        name: v.string(),
        isPro: v.boolean(),
        proSince: v.optional(v.number()),
        lemonSqueezyCustomerId: v.optional(v.string()),
        lemonSqueezyOrderId: v.optional(v.string()),
    }).index("by_user_id", ["userId"]),

    // 🟩🟩🟩 codeExecution schema for database...
    codeExecutions: defineTable({
        userId: v.string(),
        language: v.string(),
        code: v.string(),
        output: v.optional(v.string()),
        error: v.optional(v.string()),
    }).index("by_user_id", ["userId"]),

    // 🟩🟩🟩 snippet schema for database...
    snippets: defineTable({
        userId: v.string(),
        title: v.string(),
        language: v.string(),
        code: v.string(),
        userName: v.string(), // store user's name for easy access
    }).index("by_user_id", ["userId"]),

    // 🟩🟩🟩 snippetComment schema for database...
    snippetComments: defineTable({
        snippetId: v.id("snippets"),
        userId: v.string(),
        userName: v.string(),
        content: v.string(), // This will store HTML content
    }).index("by_snippet_id", ["snippetId"]),

    // 🟩🟩🟩 star schema for database...
    stars: defineTable({
        userId: v.string(),
        snippetId: v.id("snippets"),
    })
        .index("by_user_id", ["userId"])
        .index("by_snippet_id", ["snippetId"])
        .index("by_user_id_and_snippet_id", ["userId", "snippetId"]),
});