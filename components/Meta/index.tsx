import Head from 'next/head';

type Props = {
  title?: string;
  locale?: string;
  meta?: { property: string; content: string }[];
  link?: { rel: string; href: string; hrefLang?: string }[];
  image?: string;
};

const Meta = ({ title, locale, meta, link, image }: Props) => {
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
      <meta property="og:image" content={image ?? '/assets/banner.jpg'} />
    </Head>
  );
};

export default Meta;
