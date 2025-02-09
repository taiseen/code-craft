/* eslint-disable import/no-anonymous-default-export */

const clerkUrl = 'https://fancy-ladybug-85.clerk.accounts.dev';

export default {
    providers: [
        {
            domain: clerkUrl,
            applicationID: "convex",
        },
    ]
};