import { memo, useMemo } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Select from 'react-select';
import { languages } from 'constants/languages';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Flex from 'components/Flex';
import { Label, P } from 'components/Text';
import Box from 'components/Box';

const Footer = () => {
  const { t, lang } = useTranslation();
  const Router = useRouter();
  const currentLang = useMemo(
    () => languages.find((lng) => lng.code === lang),
    [lang]
  );

  return (
    <footer>
      <Flex
        position="relative"
        minHeight={360}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#12967a"
      >
        <Flex
          justifyContent="space-around"
          width="100%"
          maxWidth={['90%', '90%', 960]}
          margin="0 auto"
          py={70}
          px={0}
          flexDirection={['column', 'column', 'row']}
        >
          <Flex flexDirection="column" width={210} mb={30}>
            <Label
              mb={18}
              opacity={0.6}
              fontSize={16}
              fontWeight="bold"
              letterSpacing={2.5}
              color="#f6f8f9"
              style={{ textTransform: 'uppercase' }}
            >
              {t('common:FOOTER.DOWNLOAD')}
            </Label>
            <Label
              as="a"
              mb={10}
              fontSize={16}
              fontWeight="bold"
              letterSpacing={1.2}
              color="#f6f8f9"
              href="https://play.google.com/store/apps/details?id=com.aboudicheng.wahdapp"
              target="_blank"
              rel="noreferrer"
            >
              Google Play
            </Label>
            <Label
              as="a"
              mb={10}
              fontSize={16}
              fontWeight="bold"
              letterSpacing={1.2}
              color="#f6f8f9"
              href="https://apps.apple.com/app/id1554030477"
              target="_blank"
              rel="noreferrer"
            >
              App Store
            </Label>
          </Flex>

          <Flex flexDirection="column" width={210} mb={30}>
            <Label
              mb={18}
              opacity={0.6}
              fontSize={16}
              fontWeight="bold"
              letterSpacing={2.5}
              color="#f6f8f9"
              style={{ textTransform: 'uppercase' }}
            >
              {t('common:FOOTER.INFORMATION')}
            </Label>
            <Label
              as="a"
              mb={10}
              fontSize={16}
              fontWeight="bold"
              letterSpacing={1.2}
              color="#f6f8f9"
              href="https://www.launchgood.com/campaign/creative_application_to_invite_people_to_pray_together#!/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('common:NAV.DONATE')}
            </Label>
            <Link href="/faq">
              <Label
                as="a"
                mb={10}
                fontSize={16}
                fontWeight="bold"
                letterSpacing={1.2}
                color="#f6f8f9"
                href="faq"
              >
                {t('common:NAV.FAQ')}
              </Label>
            </Link>
            <Label
              as="a"
              mb={10}
              fontSize={16}
              fontWeight="bold"
              letterSpacing={1.2}
              color="#f6f8f9"
              href="https://github.com/wahdapp"
              target="_blank"
              rel="noreferrer"
            >
              {t('common:FOOTER.SOURCE_CODE')}
            </Label>
            <Label
              as="a"
              mb={10}
              fontSize={16}
              fontWeight="bold"
              letterSpacing={1.2}
              color="#f6f8f9"
              href="https://twitter.com/WahdappOfficial"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </Label>
          </Flex>

          <Flex flexDirection="column" width={210} mb={30}>
            <Label
              mb={18}
              opacity={0.6}
              fontSize={16}
              fontWeight="bold"
              letterSpacing={2.5}
              color="#f6f8f9"
              style={{ textTransform: 'uppercase' }}
            >
              {t('common:FOOTER.POLICIES')}
            </Label>
            <Link href="/privacy">
              <Label
                as="a"
                mb={10}
                fontSize={16}
                fontWeight="bold"
                letterSpacing={1.2}
                color="#f6f8f9"
                href="/privacy"
              >
                {t('common:FOOTER.PRIVACY_POLICY')}
              </Label>
            </Link>
          </Flex>

          <Flex flexDirection="column" width={210} mb={30}>
            <Flex flexDirection="column">
              <Label
                mb={18}
                opacity={0.6}
                fontSize={16}
                fontWeight="bold"
                letterSpacing={2.5}
                color="#f6f8f9"
                style={{ textTransform: 'uppercase' }}
              >
                {t('common:FOOTER.LANGUAGES')}
              </Label>
              <Select
                defaultValue={{
                  value: currentLang.code,
                  label: currentLang.label,
                }}
                options={languages.map((lng) => ({
                  value: lng.code,
                  label: lng.label,
                }))}
                onChange={({ value }) => {
                  Router.push(Router.pathname, Router.pathname, {
                    locale: value,
                  });
                }}
                isSearchable={false}
                styles={{
                  singleValue: (provided) => ({
                    ...provided,
                    fontFamily: 'Sen',
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    fontFamily: 'Sen',
                    backgroundColor: state.isSelected ? '#6dc7b0' : '#fff',
                    '&:hover': state.isSelected
                      ? {}
                      : {
                          backgroundColor: '#e0e0e0',
                          borderColor: '#e0e0e0',
                        },
                  }),
                }}
              />
            </Flex>
            <Box mt={30}>
              <P
                mb={10}
                fontSize={16}
                fontWeight="normal"
                letterSpacing={1.2}
                color="#f6f8f9"
              >
                All rights reserved. {new Date().getFullYear()}
              </P>
              <P
                mb={10}
                fontSize={16}
                fontWeight="bold"
                letterSpacing={1.2}
                color="#f6f8f9"
              >
                Wahdapp
              </P>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};

export default memo(Footer);
