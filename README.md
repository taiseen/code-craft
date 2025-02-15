> 10 - February - 2025

# Code Craft Editor

## 💻 Run project

```js
npm run dev
```

## 🛢️ Run database

```js
npx convex dev
```

## ⚙️ Dependencies:-

* npx create-next-app@15.0.3 .
* npm i convex
* npm i @clerk/nextjs
* npm i svix --legacy-peer-deps
* npm i zustand --legacy-peer-deps
* npm i lucide-react --legacy-peer-deps
* npm i framer-motion --legacy-peer-deps
* npm i @monaco-editor/react --legacy-peer-deps

## 🔐 DB & Auth Setup Links:-

* <https://docs.convex.dev/auth/clerk>
* <https://dashboard.clerk.com/apps/JWT_TEMPLATE_LINK>

## 📖 Learning Context:-

* Project cleanup
* Convex database with Clerk auth setup
* Schema define for convex db

### 🪝 What is WebHook?

* Webhook is automated messages sent from app, when some event happens.

### 🪝 WebHook URL Setup:-

```js
Step 1:- go to
---------------
https://dashboard.clerk.com >>> 
PROJECT_NAME > Configure > Developers | Webhooks >>> +Add Endpoints 
https://PROJECT_URL.convex.site/clerk-webhook

then:- Subscribe to events - checkbox:- user > user.created > [click] Create
then:- copy - [Signing Secret]

Step 2:- go to
---------------
https://dashboard.convex.dev >>> 
PROJECT_NAME > Settings > Environment Variables >>> +Add 
CLERK_WEBHOOK_SECRET = *********************

So after all this setup, 
form this project when a user auth by clerk...
then:- this user save into convex database...
```

* Webhooks as a Service - SVIX - Clerk use this webhook behind the screen
