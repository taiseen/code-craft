import { WebhookEvent } from "@clerk/nextjs/server";
import { httpAction } from "../_generated/server";
import { api } from "../_generated/api";
import { httpRouter } from "convex/server";
import { Webhook } from "svix";

const http = httpRouter();

// http.route({
//     path: "/lemon-squeezy-webhook",
//     method: "POST",
//     handler: httpAction(async (ctx, request) => {
//         const payloadString = await request.text();
//         const signature = request.headers.get("X-Signature");

//         if (!signature) {
//             return new Response("Missing X-Signature header", { status: 400 });
//         }

//         try {
//             const payload = await ctx.runAction(internal.lemonSqueezy.verifyWebhook, {
//                 payload: payloadString,
//                 signature,
//             });

//             if (payload.meta.event_name === "order_created") {
//                 const { data } = payload;

//                 const userData = {
//                     email: data.attributes.user_email,
//                     lemonSqueezyCustomerId: data.attributes.customer_id.toString(),
//                     lemonSqueezyOrderId: data.id,
//                     amount: data.attributes.total,
//                 }

//                 const { success } = await ctx.runMutation(api.controller.users.upgradeToPro, userData);

//                 if (success) {
//                     // optionally do anything here
//                 }
//             }

//             return new Response("Webhook processed successfully", { status: 200 });
//         } catch (error) {
//             console.log("Webhook error:", error);
//             return new Response("Error processing webhook", { status: 500 });
//         }
//     }),
// });

// we are listing for a event, which is coming from the clerk

http.route({
    path: "/clerk-webhook", // end-point  for webhook | POST method
    method: "POST",
    handler: httpAction(async (ctx, request) => {
        const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
        if (!webhookSecret) {
            throw new Error("Missing CLERK_WEBHOOK_SECRET environment variable");
        }

        const svix_id = request.headers.get("svix-id");
        const svix_signature = request.headers.get("svix-signature");
        const svix_timestamp = request.headers.get("svix-timestamp");
        if (!svix_id || !svix_signature || !svix_timestamp) {
            return new Response("Error occurred -- no svix headers", {
                status: 400,
            });
        }

        const payload = await request.json();
        const body = JSON.stringify(payload);

        const wh = new Webhook(webhookSecret);
        let evt: WebhookEvent;

        try {
            evt = wh.verify(body, {
                "svix-id": svix_id,
                "svix-timestamp": svix_timestamp,
                "svix-signature": svix_signature,
            }) as WebhookEvent;
        } catch (err) {
            console.error("Error verifying webhook:", err);
            return new Response("Error occurred", { status: 400 });
        }

        const eventType = evt.type;
        if (eventType === "user.created") {
            // save the user to convex db
            const { id, email_addresses, first_name, last_name } = evt.data;

            const email = email_addresses[0].email_address;
            const name = `${first_name || ""} ${last_name || ""}`.trim();

            try {
                const userData = { userId: id, email, name };
                await ctx.runMutation(api.controller.users.syncUser, userData);
            } catch (error) {
                console.log("Error creating user:", error);
                return new Response("Error creating user", { status: 500 });
            }
        }

        return new Response("Webhook processed successfully", { status: 200 });
    }),
});

export default http;