import { withOGImage } from 'next-api-og-image';

enum query {
  'logo',
  'title',
  'description',
}

export default withOGImage<keyof typeof query>({
  template: {
    html: async ({ title, description, logo }) => {
      const query = {
        title: title ?? 'Title',
        description: description ?? 'Description',
        logo: logo ?? 'https://theodorusclarence.com/favicon/large-og.jpg',
      };
      return `
        <html>
          <head>
            ${style}
          </head>
          <body>
            <div class="container">
              <img src="${query.logo}" alt="Favicon" />
              <h1>${query.title}</h1>
              <p class="description">${query.description}</p>
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

  img {
    max-width: 100px;
  }

  h1 {
    font-size: 1.5rem;
    font-size: 3.5rem;
    line-height: 1.1;
    margin-top: 1rem;
  }
  
  .description {
    font-size: 2rem;
    line-height: 1.5;
    margin-top: 1rem;
  }
</style>
`;
