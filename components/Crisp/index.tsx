import { useEffect } from 'react';

function Crisp() {
  useEffect(() => {
    window['$crisp'] = [];
    window['CRISP_WEBSITE_ID'] = '14a4d06e-1b79-4893-9c81-2ab040bb00a0';

    (function () {
      const d = document;
      const s = d.createElement('script');

      s.src = 'https://client.crisp.chat/l.js';
      // @ts-ignore
      s.async = 1;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  }, []);

  return null;
}

export default Crisp;
