import { useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

function Navigation() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useRouter();

  return (
    <>
      <nav className="desktop-nav">
        <div className="container">
          <Link href="/">
            <div className="title-logo">Wahdapp</div>
          </Link>
          <ul>
            <li>
              <a
                href="https://www.paypal.me/abdullahcheng"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('common:NAV.DONATE')}
              </a>
            </li>
            <li>
              <a href="mailto:support@wahd.app">{t('common:NAV.CONTACT')}</a>
            </li>
            <li>
              <Link href="/faq">
                <a className={pathname === '/faq' && 'active'}>
                  {t('common:NAV.FAQ')}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mobile-nav-wrapper">
        <div
          className={`menu-btn ${isActive ? 'active' : ''}`}
          onClick={() => setIsActive((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={`fix-mobile-menu ${isActive ? 'active' : ''}`}>
        <Link href="/">
          <a>Wahdapp</a>
        </Link>
        <a
          href="https://www.paypal.me/abdullahcheng"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('common:NAV.DONATE')}
        </a>
        <a href="mailto:support@wahd.app">{t('common:NAV.CONTACT')}</a>
        <Link href="/faq">
          <a>{t('common:NAV.FAQ')}</a>
        </Link>
      </div>
    </>
  );
}

export default Navigation;
