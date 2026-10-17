# Open Graph Generator

🍇 Open Graph Generator made using [@cf-wasm/og](https://github.com/fineshopdesign/cf-wasm) on a Cloudflare Worker, for personal use.

Feel free to fork it and use it for your website!

## Deployment Guide

The static pages (`/`, `/builder`) are exported by Next.js and served by
Cloudflare. The image routes under `/api/*` run in a Worker (`worker/`), which
caches every rendered image by URL.

1. `yarn install`
2. Set `NEXT_PUBLIC_DEPLOYMENT_URL` in `.env.production` to your domain
   (include `https://`).
3. Optional: replace `public/images/logo.jpg` with your logo, same file name.
   It is the default logo when `logo` is not passed.
4. `yarn deploy` (or connect the repo under Workers & Pages in Cloudflare with
   build command `yarn build` and deploy command `npx wrangler deploy`). This
   repo is connected that way, so every push to `main` deploys automatically.

Local preview: `yarn preview` serves on http://localhost:8787.

## General OG

### Light Mode & Site Name Only

![image](https://user-images.githubusercontent.com/55318172/137609366-6cbdfd78-0f67-4225-977b-0408404c8127.png)

Query:

`/api/general?siteName=Your Site Name&description=Lorem ipsum&theme=light`

### Light Mode & Template Title

![image](https://user-images.githubusercontent.com/55318172/137609439-337ada28-69d7-4dbd-a5f5-e62488c3e16e.png)

`/api/general?templateTitle=Page Name&siteName=Your Site Name&description=Lorem ipsum&theme=light`

### Dark Mode & Site Name Only

![image](https://user-images.githubusercontent.com/55318172/137609541-e2181783-da0a-41fe-a475-8a685ad605fb.png)

`/api/general?siteName=Your Site Name&description=Lorem ipsum&theme=dark`

### Dark Mode & Template Title

![image](https://user-images.githubusercontent.com/55318172/137609516-8b5fa579-580a-457d-8a6d-fbf530ba702b.png)

`/api/general?templateTitle=Page Name&siteName=Your Site Name&description=Lorem ipsum&theme=dark`

### Custom Logo

You can also customize logo by specifying `logo`, width is defaulted to 100px.

Or you can also add `logoWidth` and `logoHeight` by specifying pixel number

![image](https://user-images.githubusercontent.com/55318172/137609591-e17d1294-4a50-4bc1-8c5a-7adbca99ced8.png)

`/api/general?siteName=Your Site Name&description=Lorem ipsum&theme=dark&logo=https://docs.thcl.dev/apple-icon-180x180.png&logoWidth=120`
