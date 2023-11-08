# @vue-mf/auth

## What is this?

This is an microfrontend repo demonstrating how to use [single-spa](https://single-spa.js.org).

## How does it work?

[Full article](https://single-spa.js.org/docs/recommended-setup)

This repository is a javascript project that creates a javascript bundle that is an in-browser javascript module (explanation on [youtube](https://www.youtube.com/watch?v=Jxqiu6pdMSU&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=2) / [bilibili](https://www.bilibili.com/video/av83498486/)). The currently deployed version of the in-browser module can be seen at https://shared-deps.edenfarm.tech/importmap.json.

This project uses [Vue](https://vuejs.org) and was created with the [create-single-spa](https://single-spa.js.org/docs/create-single-spa) CLI. It uses webpack and babel.

The ["workflows" view](https://drive.google.com/file/d/1kxD7F8Sdmijpya7WaDh5_vQn8DNJ1Doo/view?usp=sharing) (pictured below) Deployments for this in-browser module are completely independent of deployments for any other module.

![image](https://user-images.githubusercontent.com/5524384/75210801-5ba02700-573f-11ea-8064-46af165cba0a.png)

## Local development

[Full documentation](https://single-spa.js.org/docs/recommended-setup#local-development)

There are two ways to do local development. It is preferred to do one module at a time, whenever possible.

### One module at a time

```sh
cd auth
yarn install
yarn serve
```

Note that you may use whichever port you would like to. Go to https://localhost:8502/js/app.js and verify that you are able to load the file without any SSL problems. To solve SSL problems, see [these instructions](https://improveandrepeat.com/2016/09/allowing-self-signed-certificates-on-localhost-with-chrome-and-firefox/).

Now, go to https://v3-dashboard.edenfarm.tech/. In the browser console, run the following:

```js
localStorage.setItem('devtools', true);
```

Refresh the page. Click on the tan / beige rectangle:

![image](https://user-images.githubusercontent.com/5524384/75211359-e46b9280-5740-11ea-80bb-974846df414b.png)

Set an [import map override](https://github.com/joeldenning/import-map-overrides/) to `https://localhost:8502/js/app.js`.

![image](https://user-images.githubusercontent.com/5524384/75211553-7e333f80-5741-11ea-97d6-d3d86ffd1826.png)

Refresh the page. Your local code for this module will now be running on https://v3-dashboard.edenfarm.tech/. You may make changes locally and refresh the page to see them.

### All modules together

Run the root-config project locally:

```
cd root-config
yarn install
yarn start
```

Now follow the steps above for "One module at a time" for each of the modules you wish to work on.
