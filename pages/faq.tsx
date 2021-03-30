import { Nav, Footer, Meta, Download } from 'components';
import Image from 'next/image';
import meta from 'config/metas/faq.json';
import useTranslation from 'next-translate/useTranslation';
import Box from 'components/Box';
import { H1, H2, P } from 'components/Text';

type QA = {
  Q: string;
  A: string;
};

export function getStaticProps() {
  return { props: {} };
}

function FAQ() {
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

      <Box position="relative" width="100%">
        <Box
          position="relative"
          minHeight={[280, 280, 280, 450]}
          background="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.55))"
        >
          <Box
            maxWidth={['90%', '90%', '90%', 960]}
            m="0 auto"
            pt={[0, 0, 0, 120, 120]}
          >
            <Image
              src="/assets/cover1.jpg"
              layout="fill"
              alt="background"
              className="header-bg"
            />
            <Box width="100%" pt={[100, 80, 80, 80]}>
              <H1
                fontSize={[30, 30, 40, 54]}
                letterSpacing={2}
                textShadow="0 2px 24px rgba(0, 0, 0, 0.55)"
                mb={15}
              >
                {t('faq:HEADER')}
              </H1>
              <H2
                fontWeight="normal"
                textShadow="0 2px 24px rgba(0, 0, 0, 0.55)"
                lineHeight="1.14"
                letterSpacing={1.3}
                fontSize={[18, 18, 24, 28]}
              >
                {t('faq:SUBHEADER')}
              </H2>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box as="section" width="100%" pt={70} pb={90}>
        <Box maxWidth={['90%', '90%', '90%', 960]} m="0 auto">
          {FAQS.map((q, i) => (
            <>
              <H2 color="#444444" mb={20} fontSize={32} key={`h${i}`}>
                {q.Q}
              </H2>
              <P
                color="#545454"
                mb={30}
                fontSize={20}
                lineHeight="1.7"
                key={`p${i}`}
                style={{ whiteSpace: 'pre-line' }}
              >
                {q.A}
              </P>
            </>
          ))}
        </Box>
      </Box>

      <Download />

      <Footer />
    </div>
  );
}

export default FAQ;
