This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

This is a NextJS + Firebase project created to illustrate the different build methods on the framework.

Firebase was chosen for it's simplicity to create, to use and as means to persist data.

The project gets data from Github API and add it to the Firestore, using differently on each page to show how different how each build type works.

This was part of a live talk between coworkers, so no context or comments are given on any of the files.

## Running the project locally

You will need to create a new [Firebase application](https://console.firebase.google.com), then create a file `firebase-client.js` at the root of the project. You can duplicate and rename `firebase-client.example.js` to make it easier for you.

Then, simply run

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
