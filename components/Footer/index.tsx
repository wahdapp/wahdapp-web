import { useTranslation, Link, i18n } from 'i18n';
import Select from 'react-select';
import { languages } from 'constants/languages';
import './style.scss';
import { memo, useMemo } from 'react';

const Footer: React.FC<{ lang: string }> = ({ lang }) => {
  const { t } = useTranslation(['common']);
  const currentLang = useMemo(
    () => languages.find((lng) => lng.code === lang),
    [lang]
  );

  return (
    <footer>
      <div className="background-cover">
        <div className="columns">
          <div className="footer-col">
            <span className="label">{t('FOOTER.DOWNLOAD')}</span>
            <a
              href="https://play.google.com/store/apps/details?id=com.aboudicheng.wahdapp"
              target="_blank"
              rel="noreferrer"
            >
              Google Play
            </a>
            <Link href="#">
              <a>App Store</a>
            </Link>
          </div>

          <div className="footer-col">
            <span className="label">{t('FOOTER.INFORMATION')}</span>
            <a
              href="https://www.paypal.me/abdullahcheng"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('NAV.DONATE')}
            </a>
            <Link href="/faq">
              <a>{t('NAV.FAQ')}</a>
            </Link>
            <a
              href="https://github.com/wahdapp"
              target="_blank"
              rel="noreferrer"
            >
              {t('FOOTER.SOURCE_CODE')}
            </a>
          </div>

          <div className="footer-col">
            <span className="label">{t('FOOTER.POLICIES')}</span>
            <Link href="/privacy">
              <a>{t('FOOTER.PRIVACY_POLICY')}</a>
            </Link>
          </div>

          <div className="footer-col down">
            <div className="footer-col">
              <span className="label">{t('FOOTER.LANGUAGES')}</span>
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
                  i18n.changeLanguage(value);
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
