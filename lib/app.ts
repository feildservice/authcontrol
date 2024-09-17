import packageInfo from '../package.json';
import env from './env';

const app = {
  version: packageInfo.version,
  name: 'AtService-AuthControl',
  logoUrl: 'http://localhost:4002/atservice.png',
  url: env.appUrl,
};

export default app;
