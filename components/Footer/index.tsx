import { memo, useMemo } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Select from 'react-select';
import { languages } from 'constants/languages';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const { t, lang } = useTranslation();
  const Router = useRouter();
  const currentLang = useMemo(
    () => languages.find((lng) => lng.code === lang),
    [lang]
  );

  return (
    <footer>
      <div className="background-cover">
        <div className="columns">
          <div className="footer-col">
            <span className="label">{t('common:FOOTER.DOWNLOAD')}</span>
            <a
              href="https://play.google.com/store/apps/details?id=com.aboudicheng.wahdapp"
              target="_blank"
              rel="noreferrer"
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com/app/id1554030477"
              target="_blank"
              rel="noreferrer"
            >
              App Store
            </a>
          </div>

          <div className="footer-col">
            <span className="label">{t('common:FOOTER.INFORMATION')}</span>
            <a
              href="https://www.paypal.me/abdullahcheng"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('common:NAV.DONATE')}
            </a>
            <Link href="/faq">
              <a>{t('common:NAV.FAQ')}</a>
            </Link>
            <a
              href="https://github.com/wahdapp"
              target="_blank"
              rel="noreferrer"
            >
              {t('common:FOOTER.SOURCE_CODE')}
            </a>
            <a
              href="https://twitter.com/WahdappOfficial"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>

          <div className="footer-col">
            <span className="label">{t('common:FOOTER.POLICIES')}</span>
            <Link href="/privacy">
              <a>{t('common:FOOTER.PRIVACY_POLICY')}</a>
            </Link>
          </div>

          <div className="footer-col down">
            <div className="footer-col">
              <span className="label">{t('common:FOOTER.LANGUAGES')}</span>
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
            </div>
            <div>
              <div className="trademark">
                All rights reserved. {new Date().getFullYear()}
              </div>
              <div className="trademark bold">Wahdapp</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
