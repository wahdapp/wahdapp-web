import Image from 'next/image';
import { Element } from 'react-scroll';
import { useTranslation } from 'i18n';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import './styles.scss';

function Download() {
  const { t } = useTranslation(['common']);

  return (
    <section className="download">
      <Element name="download" />
      <Zoom duration={800} delay={500}>
        <h2>{t('DOWNLOAD_NOW')}</h2>
      </Zoom>
      <div className="app-download-wrapper">
        <Flip left duration={800} delay={1000}>
          <span className="store-img">
            <a
              href="https://play.google.com/store/apps/details?id=com.aboudicheng.wahdapp"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/play-store-badge.png"
                width={195}
                height={60}
                alt="play-store"
              />
            </a>
          </span>
        </Flip>
        <Flip left duration={800} delay={1500}>
          <span className="store-img">
            <a
              href="https://apps.apple.com/app/id1554030477"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/app-store-badge.png"
                width={195}
                height={60}
                alt="app-store"
              />
            </a>
          </span>
        </Flip>
      </div>
    </section>
  );
}

export default Download;
