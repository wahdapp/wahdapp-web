import { Nav, Footer, Meta, Download } from 'components';
import { useTranslation, i18n } from 'i18n';
import Image from 'next/image';
import meta from 'config/metas/faq.json';
import { PageContext } from 'types';
import { NextPage } from 'next';
import 'styles/faq.scss';
import { TFunction } from 'next-i18next';

type QA = {
  Q: string;
  A: string;
};

const FAQ: NextPage<Props> = ({ language }) => {
  const { t }: { t: TFunction } = useTranslation(['faq']);
  const FAQS = t('faq:FAQS', { returnObjects: true }) as QA[];

  const lang = i18n.language ? i18n.language : language ? language : 'en';

  return (
    <div id="faq">
      <Meta
        title={meta[lang].title}
        locale={meta[lang].locale}
        meta={meta[lang].meta}
        link={meta[lang].link}
      />
      <Nav />

      <div className="top-header">
        <div className="background-cover">
          <div className="container">
            <div>
              <Image
                src="/assets/cover1.jpg"
                layout="fill"
                alt="background"
                className="header-bg"
              />
            </div>
            <div className="header-wrapper">
              <div className="header-block">
                <h1>{t('faq:HEADER')}</h1>
                <span className="subheader">{t('faq:SUBHEADER')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          {FAQS.map((q, i) => (
            <>
              <h2 key={`h${i}`}>{q.Q}</h2>
              <p key={`p${i}`}>{q.A}</p>
            </>
          ))}
        </div>
      </div>

      <Download />

      <Footer lang={lang} />
    </div>
  );
};

type Props = {
  namespacesRequired: string[];
  language: string;
};

FAQ.getInitialProps = ({ req }: PageContext) => {
  try {
    return {
      namespacesRequired: ['faq', 'common'],
      language: req ? req.language : i18n.language ? i18n.language : 'en',
    };
  } catch (e) {
    console.log(e);
  }
};

export default FAQ;
