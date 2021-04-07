import Image from 'next/image';
import { Element } from 'react-scroll';
import useTranslation from 'next-translate/useTranslation';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Box from 'components/Box';
import { H2 } from 'components/Text';
import Flex from 'components/Flex';
import styled from 'styled-components';

const StoreImg = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

function Download() {
  const { t } = useTranslation();

  return (
    <Box as="section" id="download" pt={45} pb={50} background="#f5f8fd">
      <Element name="download" />
      <Zoom duration={800} delay={500}>
        <H2
          fontSize={[30, 40, 54]}
          color="#545454"
          textShadow="0 2px 24px rgba(0, 0, 0, 0.12)"
          textAlign="center"
          mb={45}
        >
          {t('common:DOWNLOAD_NOW')}
        </H2>
      </Zoom>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={['column', 'column', 'row']}
      >
        <StoreImg>
          <a
            href="https://play.google.com/store/apps/details?id=com.aboudicheng.wahdapp"
            target="_blank"
            rel="noreferrer"
          >
            <Flip left duration={800} delay={1000}>
              <Image
                src="/assets/play-store-badge.png"
                width={195}
                height={60}
                alt="play-store"
              />
            </Flip>
          </a>
        </StoreImg>
        <StoreImg>
          <a
            href="https://apps.apple.com/app/id1554030477"
            target="_blank"
            rel="noreferrer"
          >
            <Flip left duration={800} delay={1500}>
              <Image
                src="/assets/app-store-badge.png"
                width={195}
                height={60}
                alt="app-store"
              />
            </Flip>
          </a>
        </StoreImg>
      </Flex>
    </Box>
  );
}

export default Download;
