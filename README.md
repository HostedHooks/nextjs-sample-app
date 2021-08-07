# A HostedHooks todo app sample using nextjs

This example shows how to integrate [HostedHooks](https://docs.hostedhooks.com/getting-started/what-is-hosted-hooks) with react-based applications and send webhooks out for specific events that are triggered within these applications

## How to use

```bash
git clone https://github.com/HostedHooks/nextjs_sample_app.git

cd nextjs_sample_app
```

## Configuration

### Step 1. Create an account on hostedhooks

First, [create an accout on hostedhooks](https://hostedhooks.com/sign_up).

### Step 2. Generate an app for your webhooks

After creating your accout, you need to [generate a new app](https://docs.hostedhooks.com/getting-started/webhooks/setup-your-app#1-generate-an-app) where events are occurring and you want to notify your subscribers of.

### Step 3. Create a Webhook Event for your app instance.

Next, go to your app and create a [Webhook Event](https://docs.hostedhooks.com/developer-resources/components/webhook-events) for your app that subscribers can subscribe to. 


In this example, we set 4 events based on normal todo app functionalities:

- `todo.created` - triggered whenever a new todo is **created**.
- `todo.completed` - triggered whenever a todo is **completed**.
- `todo.uncompleted` - triggered whenever a todo is **uncompleted**.
- `todo.deleted` - triggered whenever a todo is **deleted**.

**Note:** The events sending out from your application must match the event created in your app instance [app instance](https://docs.hostedhooks.com/developer-resources/components/apps).

### Step 4. Set up environment variables

Next, copy the `.env.local.example` file in root directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:
- `NEXT_PUBLIC_HOSTEDHOOKS_API_KEY` must be the **API Key** from your [account settings](https://www.hostedhooks.com/settings/account).
- `NEXT_PUBLIC_APP_UUID` must be the **ID** of your app instance.

Your `.env.local` file should look like this:

```bash
NEXT_PUBLIC_HOSTEDHOOKS_API_KEY=...
NEXT_PUBLIC_APP_UUID=...
```

**Note:** These environment variables must be prefixed by `NEXT_PUBLIC_` as they will be exposed and run in the browser ([Documentation](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)).

### Step 6. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app is now running at http://localhost:3000, create a new todo and open your devtools to see the message. 

## Deploying to Heroku

You can deploy your own copy of this app using Heroku button:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://www.heroku.com/deploy/?template=https://github.com/HostedHooks/nextjs-sample-app)

## Documentation

For more information about using Hostedhooks, check out [documentation](https://docs.hostedhooks.com/).
