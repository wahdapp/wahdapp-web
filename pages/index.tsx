import { Nav, Footer, Meta, Download } from 'components';
import Button from 'components/Button';
import Image from 'next/image';
import meta from 'config/metas/home.json';
import { scroller } from 'react-scroll';
import { Users, Globe, Key } from 'react-feather';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import useTranslation from 'next-translate/useTranslation';
import { H1, H2, H3, H4, P } from 'components/Text';
import Box from 'components/Box';
import Flex from 'components/Flex';
import styled from 'styled-components';

function goto(_target = '', offset = 0): void {
  scroller.scrollTo(_target, {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset,
  });
}

export function getStaticProps() {
  return { props: {} };
}

function Home() {
  const { t, lang } = useTranslation();

  return (
    <div id="home">
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
          minHeight={['unset', 'unset', 'unset', 600]}
          background="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.55))"
        >
          <Box
            maxWidth={['90%', '90%', '90%', 960]}
            m="0 auto"
            pt={[0, 0, 0, 120, 120]}
          >
            <Image
              src="/assets/bg.jpg"
              layout="fill"
              alt="background"
              objectFit="cover"
              className="header-bg"
            />
            <Box width="100%" pt={[100, 80, 80, 80]}>
              <Fade up duration={800} delay={500}>
                <H1
                  fontSize={[30, 30, 40, 54]}
                  letterSpacing={2}
                  textShadow="0 2px 24px rgba(0, 0, 0, 0.55)"
                  mb={15}
                >
                  {t('landing:HEADER.TITLE')}
                </H1>
              </Fade>
              <Fade up duration={800} delay={1000}>
                <H2
                  fontWeight="normal"
                  textShadow="0 2px 24px rgba(0, 0, 0, 0.55)"
                  lineHeight="1.14"
                  letterSpacing={1.3}
                  fontSize={[18, 18, 24, 28]}
                >
                  {t('landing:HEADER.SUBTITLE')}
                </H2>
              </Fade>
            </Box>
            <Box pb={[40, 40, 40, 0]} mt={40}>
              <Zoom duration={800} delay={1500} center>
                <Button onClick={() => goto('download')}>
                  {t('landing:DOWNLOAD')}
                </Button>
              </Zoom>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box as="section" width="100%" pt={70} pb={90} background="#f5f8fd">
        <Box maxWidth={['90%', '90%', '90%', 960]} m="0 auto">
          <Fade duration={800} delay={500}>
            <H2
              textAlign="center"
              color="#545454"
              mb={35}
              textShadow="0 2px 24px rgba(0, 0, 0, 0.12)"
              fontSize={[32, 32, 38, 45]}
            >
              {t('landing:BENEFITS.TITLE')}
            </H2>
          </Fade>
          <Zoom duration={800} delay={1000}>
            <hr />
          </Zoom>
          <Flex
            flexDirection={['column', 'column', 'column', 'row', 'row']}
            justifyContent={[
              'center',
              'center',
              'center',
              'space-between',
              'space-between',
            ]}
            mt={50}
          >
            <Flip left duration={800}>
              <Card>
                <Users size={48} color="#6DC7B0" />
                <H4 fontSize={24} color="#545454" mt={15} mb={20}>
                  {t('landing:BENEFITS.LIST.0.TITLE')}
                </H4>
                <P
                  fontSize={16}
                  lineHeight="1.65"
                  letterSpacing={0.8}
                  color="#625957"
                >
                  {t('landing:BENEFITS.LIST.0.DESC')}
                </P>
              </Card>
            </Flip>
            <Flip left duration={800} delay={300}>
              <Card>
                <Globe size={48} color="#6DC7B0" />
                <H4 fontSize={24} color="#545454" mt={15} mb={20}>
                  {t('landing:BENEFITS.LIST.1.TITLE')}
                </H4>
                <P
                  fontSize={16}
                  lineHeight="1.65"
                  letterSpacing={0.8}
                  color="#625957"
                >
                  {t('landing:BENEFITS.LIST.1.DESC')}
                </P>
              </Card>
            </Flip>
            <Flip left duration={800} delay={600}>
              <Card>
                <Key size={48} color="#6DC7B0" />
                <H4 fontSize={24} color="#545454" mt={15} mb={20}>
                  {t('landing:BENEFITS.LIST.2.TITLE')}
                </H4>
                <P
                  fontSize={16}
                  lineHeight="1.65"
                  letterSpacing={0.8}
                  color="#625957"
                >
                  {t('landing:BENEFITS.LIST.2.DESC')}
                </P>
              </Card>
            </Flip>
          </Flex>
        </Box>
      </Box>

      <Box as="section" width="100%" py={40}>
        <Box maxWidth={['90%', '90%', '90%', 960]} m="0 auto">
          <Box mt={30}>
            <Fade duration={800} delay={600}>
              <H2
                textAlign="center"
                color="#545454"
                mb={35}
                textShadow="0 2px 24px rgba(0, 0, 0, 0.12)"
                fontSize={[32, 32, 38, 45]}
              >
                {t('landing:EXPLORE.TITLE')}
              </H2>
            </Fade>
            <Zoom duration={800} delay={900}>
              <hr />
            </Zoom>
          </Box>

          <Flex
            mt={30}
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            justifyContent="space-between"
            alignItems="center"
            pt={[30, 30, 0]}
          >
            <Box width={['100%', '100%', '45%']}>
              <Fade up duration={800} delay={600}>
                <Image
                  src="/assets/search.svg"
                  alt="search"
                  width={432}
                  height={216}
                  className="section-img"
                />
              </Fade>
            </Box>
            <Box
              width={['100%', '100%', '50%']}
              p={[0, 0, 35]}
              mb={[30, 30, 0]}
            >
              <Fade up duration={800} delay={600}>
                <H3
                  fontSize={[22, 28, 36]}
                  color="#545454"
                  mb={18}
                  textShadow="0 2px 24px rgba(0, 0, 0, 0.12)"
                  letterSpacing="unset"
                >
                  {t('landing:EXPLORE.LIST.0.TITLE')}
                </H3>
                <P fontSize={20} color="#625957" lineHeight="1.65">
                  {t('landing:EXPLORE.LIST.0.DESC')}
                </P>
              </Fade>
            </Box>
          </Flex>

          <Flex
            mt={30}
            flexDirection={['column', 'column', 'row']}
            justifyContent="space-between"
            alignItems="center"
            pt={[30, 30, 0]}
          >
            <Box
              width={['100%', '100%', '50%']}
              p={[0, 0, 35]}
              mb={[30, 30, 0]}
            >
              <Fade up duration={800} delay={600}>
                <H3
                  fontSize={[22, 28, 36]}
                  color="#545454"
                  mb={18}
                  textShadow="0 2px 24px rgba(0, 0, 0, 0.12)"
                  letterSpacing="unset"
                >
                  {t('landing:EXPLORE.LIST.1.TITLE')}
                </H3>
                <P fontSize={20} color="#625957" lineHeight="1.65">
                  {t('landing:EXPLORE.LIST.1.DESC')}
                </P>
              </Fade>
            </Box>
            <Box width={['100%', '100%', '45%']}>
              <Fade up duration={800} delay={600}>
                <Image
                  src="/assets/dayoff.svg"
                  alt="dayoff"
                  width={432}
                  height={216}
                  className="section-img"
                />
              </Fade>
            </Box>
          </Flex>

          <Flex
            mt={30}
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            justifyContent="space-between"
            alignItems="center"
            pt={[30, 30, 0]}
          >
            <Box width={['100%', '100%', '45%']}>
              <Fade up duration={800} delay={600}>
                <Image
                  src="/assets/home.svg"
                  alt="home"
                  width={432}
                  height={216}
                  className="section-img"
                />
              </Fade>
            </Box>
            <Box
              width={['100%', '100%', '50%']}
              p={[0, 0, 35]}
              mb={[30, 30, 0]}
            >
              <Fade up duration={800} delay={600}>
                <H3
                  fontSize={[22, 28, 36]}
                  color="#545454"
                  mb={18}
                  textShadow="0 2px 24px rgba(0, 0, 0, 0.12)"
                  letterSpacing="unset"
                >
                  {t('landing:EXPLORE.LIST.2.TITLE')}
                </H3>
                <P fontSize={20} color="#625957" lineHeight="1.65">
                  {t('landing:EXPLORE.LIST.2.DESC')}
                </P>
              </Fade>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Download />

      <Footer />
    </div>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 360px;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08);
  transition: 0.4s;
  max-width: 280px;
  padding: 25px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.35);
  }

  @media screen and (max-width: 1024px) {
    max-width: unset;
    min-height: unset;
    height: 100%;
    width: 100%;
    margin-bottom: 25px;
  }
`;

export default Home;
