# FizzBuzz implemented using Svelte and tested using Jest

Yeah, i know. I was intending to do it with React, but came acrods this.
More on that later...

### Ok, lets dive into it

You might want to install an IDE Plugin for Svelte...
[JetBrain Plugin](https://plugins.jetbrains.com/plugin/12375-svelte)

You need NPM of course.
Rollup needs to be installed globaly. On Unix-like systems you need super user rights.

```bash
npm install rollup -g
```

After cloning this repo and switching to it"s root directory, node modules need to be installed

```bash
npm install
```

Now let's start the live demo. Run the dev build and it open localhost on your browser with port 5000

```bash
npm run dev
```

This is how to run our unit tests for App.svelte and FizzBuzz.svelte

```bash
npm run test
```

### Now, why Rollup?

Rollup allows us to make builds for UMD Components as well as full SPA.
So, we didn't just build the entire app as bundle, we build the fizzBuzzComponent
ready to be mounted within pure html/js, react, vue, angular etc. Let's check it out!

```bash
npm run build
```

Checkout the public/build folder...

### What does Svelte do, what others don't?

Imagen a scenario where we want to transform a php/jquery
project step by step in something component driven, with data bindings,
somewhat observable pattern and all that good stuff.

Multiple Vue/React components results in having the same vendor
code all over the place. You could go for a global approach, 
but you will be forced to keep all Vue/React versions on the same level or somehow
deal with multiple runtimes (or simply don't mind the waste).
 
In Svelte, there is relatively few runtime code, no extra dependencies etc.
It rather transforms svelte code into standalone vanilla js code. 
There is little extra code to deal with mounting
and the events to the oter world, but not much more.

In Svelte the compiler is actually the framework!

These umd files are components as functions. You just point them where in the DOM they should mount,
and they work. So it's a bit like a jquery plugin from the outside, but like vue.js from the inside.

### Sidenote

I also opted in for Typescrip. I expected to make component attributes typesafe and reduce my unit test.
Within Svelte, this is the case and works as expected. But (of course) that does't work with the components as UMD functions. We might be able to export type informations with them as well. I would reconsider that, to be honest.
Learning curve is already high enough.
