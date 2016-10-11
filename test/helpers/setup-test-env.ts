import * as jsdom from 'jsdom';

const setupDom = () => {
  if (typeof document !== 'undefined') {
    return;
  }

  const doco = jsdom.jsdom('<html><body></body></html>');

  global['document'] = doco;
  global['window'] = doco.defaultView;
  global['navigator'] = doco.defaultView.navigator;
};

setupDom();