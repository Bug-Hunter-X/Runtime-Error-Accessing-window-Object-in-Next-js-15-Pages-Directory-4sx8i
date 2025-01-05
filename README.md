# Next.js 15 Runtime Error: Accessing window Object in Pages Directory

This repository demonstrates a runtime error encountered when accessing the `window` object within a Next.js 15 application's `pages` directory.  The issue arises because the `window` object is not available during server-side rendering (SSR). This leads to a runtime error that is not readily apparent during development or the build process.

## The Problem

The code attempts to log `window.location.href` in the `/pages/about.js` file. This causes an error in the browser because `window` is undefined during the server-side render process, and the error isn't caught until the client-side hydration step.

## Solution

To solve the problem, you must use techniques that handle the absence of the `window` object on the server.  This can involve client-side conditional rendering or using a library that provides server-side rendering compatibility. The solution here demonstrates client-side conditional rendering.

## How to reproduce the bug:
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Navigate to `/about`
5. Observe the runtime error in the browser's console.

## How to run the solution:
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Navigate to `/about`
5. Observe that the error is resolved.