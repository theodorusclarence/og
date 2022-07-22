import { withOGImage } from 'next-api-og-image';

import { deploymentURL } from '@/constant/env';

enum QueryEnum {
  'logo',
  'siteName',
  'description',
  'theme',
  'templateTitle',
  'logoWidth',
  'logoHeight',
  'banner',
}

export default withOGImage<'query', keyof typeof QueryEnum>({
  template: {
    html: async ({
      siteName,
      description,
      logo,
      theme,
      templateTitle,
      logoWidth,
      logoHeight,
      banner,
    }) => {
      const query = {
        siteName: siteName ?? 'Site Name',
        description: description ?? 'Description',
        logo: logo ?? `${deploymentURL}/images/logo.jpg`,
        theme: theme ?? 'dark',
        templateTitle,
        logoWidth: logoWidth ?? '100',
        logoHeight,
        banner,
      };

      return `
        <html>
          <head>
            ${getStyle(query)}
          </head>
          <body>
            <div class="container">
              <div class="split">
                <div class="left">
                  <h3 class="link">
                    theodorusclarence.com/blog
                  </h3>
                  <h1 class="title">
                    <span class="gradient">
                      ${query.templateTitle ?? 'Blog Title'}
                    </span>
                  </h1>
                  <div class="social">
                    <img class="social_img" src="https://res.cloudinary.com/theodorusclarence/image/upload/c_fill,g_auto:face,h_1000,w_1000/v1636335597/theodorusclarence/clarence_gu3cxx.jpg">
                    <div class="social_info">
                      <p class="name">Theodorus Clarence</p>
                      <p class="twitter">@th_clarence</p>
                    </div>
                  </div>
                </div>
                <div class="right">${
                  banner ? `<img src="${banner}" />` : ''
                }</div>
              </div>
            </div>
          </body>
        </html>
      `;
    },
  },
  dev: {
    inspectHtml: true,
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getStyle = (query: Record<keyof typeof QueryEnum, string | string[]>) => `
<style>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url('/fonts/inter-var-latin.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  body {
    font-family: 'Inter', sans-serif;
  }

  .container {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${query.theme === 'dark' ? '#222' : '#fff'};
    color: ${query.theme === 'dark' ? 'white' : 'black'};

    text-align: center;
    padding: 4rem 3rem;
  }

  h1 {
    font-size: 1.5rem;
    font-size: 3.5rem;
    line-height: 1.1;
    margin-top: 1.5rem;
  }

  h3 {
    margin-top: 0.5rem;
    color: ${query.theme === 'dark' ? '#E5E7EB' : '#374151'};
    font-size: 1.5rem;
  }

  .gradient {
    background-image: linear-gradient(to top right, #00e887, #00e0f3);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  .split {
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 100%;
  }
  .left {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .link {
    font-weight: 400;
  }
  .title {
    font-weight: 450;
    font-size: 3rem;
    line-height: 1.3;
    margin-top: 1rem;
  }
  .social {
    display: flex;
    margin-top: auto;
    gap: 1.4rem;
    align-items: center;
  }
  .social_img {
    width: 80px;
    border-radius: 100%;
  }
  .name {
    font-weight: 600;
    font-size: 1.6rem;
  }
  .twitter {
    font-size: 1.3rem;
    margin-top: 0.1rem;
    color: #F3F4F6;
  }
  .right img {
    height: 83vh;
    width: auto;
    display: block;
  }
</style>
`;
