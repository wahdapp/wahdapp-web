import Head from 'next/head';

const Meta = ({ title, locale, meta, link }) => {
  return (
    <Head>
      <html lang={locale} />
      <title>{title}</title>
      <meta property="og:locale" content={locale} />
      {meta.map((info, i) => (
        <meta key={i} {...info} />
      ))}
      {link.map((info, i) => (
        <meta key={i} {...info} />
      ))}
      <meta property="og:image" content="/assets/banner.jpg" />
    </Head>
  );
};

export default Meta;
