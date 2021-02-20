import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class WahdappDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="apple-itunes-app"
            content="app-id=1554030477, affiliate-data=Wahdapp, app-argument=https://wahd.app"
          />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Sen:400,700,800&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Almarai:400,700,800&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,500,700&display=swap"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.$crisp=[];window.CRISP_WEBSITE_ID="14a4d06e-1b79-4893-9c81-2ab040bb00a0";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
          `,
              }}
            />
          )}
        </body>
      </Html>
    );
  }
}
