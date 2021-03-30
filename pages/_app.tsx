import App from 'next/app';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import ReactGA from 'react-ga';
import useTranslation from 'next-translate/useTranslation';
import appWithI18n from 'next-translate/appWithI18n';
import i18nConfig from '../i18n.json';
import config from 'react-reveal/globals';
import dynamic from 'next/dynamic';
import 'styles/index.scss';
import 'styles/home.scss';
import 'styles/faq.scss';
import 'styles/components/button.scss';
import 'styles/components/download.scss';
import 'styles/components/footer.scss';
import 'styles/components/nav.scss';

const Crisp = dynamic(() => import('components/Crisp'));

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }) {
  const { lang } = useTranslation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-172829827-1');
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
    }
  }, []);

  // dynamically set html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      {process.env.NODE_ENV === 'production' && <Crisp />}
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return appProps;
};

// @ts-ignore
export default appWithI18n(MyApp, i18nConfig);
