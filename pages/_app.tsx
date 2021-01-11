import App from 'next/app';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import ReactGA from 'react-ga';
import { appWithTranslation, i18n } from 'i18n';
import config from 'react-reveal/globals';
import 'styles/index.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-172829827-1');
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
    }
  }, []);

  // dynamically set html lang attribute
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return appProps;
};

export default appWithTranslation(MyApp);
