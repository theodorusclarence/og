# Open Graph Generator

🍇 Open Graph Generator made using [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) for personal use.

Feel free to fork it and use it for your website!

## Deployment Guide

You can achieve deployment fully from the website without cloning the repository.

1. Fork the repository
2. Replace the public/images/logo.jpg with your logo. Make sure it has the same file name.

   This is optional, replacing the logo will grant you the ease of using the api without having to add your logo link on the parameters every time.

3. Deploy to Vercel.

### Vercel Configuration Settings

There are some configurations that you need to do:

1.  Add the following to the environment variables. **Settings > Environment Variables**

| Name                       | Value                   |
| -------------------------- | ----------------------- |
| NEXT_PUBLIC_DEPLOYMENT_URL | https://your.domain.com |

After configuring, **redeploy the project**

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
