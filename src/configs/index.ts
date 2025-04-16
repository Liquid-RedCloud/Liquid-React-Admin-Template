import prodConfig from './prodConfig';
import stagConfig from './stagConfig';
import devConfig from './devConfig';

const mode = import.meta.env.MODE;

const getConfigFile = () => {
  switch (mode) {
    case 'production':
      return prodConfig;
    case 'staging':
      return stagConfig;
    default:
      return devConfig;
  }
};

export default getConfigFile();
