import { withOGImage } from 'next-api-og-image';

import { deploymentURL } from '@/constant/env';

enum query {
  'title',
  'type',
  'description',
}

export default withOGImage<'query', keyof typeof query>({
  template: {
    html: async ({ title, type, description }) => {
      const query = {
        title: title ?? 'Title',
        type: type ?? 'Type',
        description,
      };
      return `
        <html>
          <head>
            ${style}
          </head>
          <body>
            <div class="container">
              <header>
                <img src="${deploymentURL}/images/logo.jpg" alt="Favicon" />
                <div class="right">
                  <h2>${query.type} by</h2>
                  <p class="gradient">Theodorus Clarence</p>
                </div>
              </header>
              <h1>${query.title}</h1>
              ${
                query.description
                  ? `<p class="description">${query.description}</p>`
                  : ''
              }
              <p class="site-name">theodorusclarence.com</p>
            </div>
          </body>
        </html>
      `;
    },
  },
});

const style = `
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

    background: #222;
    color: white;

    text-align: center;
    padding: 0 5rem;
  }

  header {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  header h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  header .right {
    text-align: left;
  }

  header .gradient {
    color: #222;
    background-image: linear-gradient(to top right, #00e887, #00E0F3);
    margin-top: 0.5rem;
    padding: 0.4rem 1rem;
    font-weight: 700;
    font-size: 2.3rem;
  }

  img {
    max-width: 110px;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-top: 2rem;
  }
  
  .description {
    font-size: 1.8rem;
    line-height: 1.5;
    margin-top: 1rem;
    color: #D1D5DB;
  }

  .site-name {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-weight: 600;
    font-size: 1.5rem;
    background-image: linear-gradient(to top right,var(--tw-gradient-stops));
    --tw-gradient-from: #00e887;
    --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to,rgba(0,232,135,0));
    --tw-gradient-to: #00e0f3;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
</style>
`;
