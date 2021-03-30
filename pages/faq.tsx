import { Nav, Footer, Meta, Download } from 'components';
import Image from 'next/image';
import meta from 'config/metas/faq.json';
import useTranslation from 'next-translate/useTranslation';

type QA = {
  Q: string;
  A: string;
};

const FAQ = () => {
  const { t, lang } = useTranslation();
  const FAQS = t('faq:FAQS', {}, { returnObjects: true }) as QA[];

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

      <Footer />
    </div>
  );
};

export default FAQ;
