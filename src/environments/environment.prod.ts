import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://fl77jbmmw1.execute-api.us-east-1.amazonaws.com/prod',
    order: 'https://fl77jbmmw1.execute-api.us-east-1.amazonaws.com/prod',
    import: 'https://fl77jbmmw1.execute-api.us-east-1.amazonaws.com/prod',
    bff: 'https://fl77jbmmw1.execute-api.us-east-1.amazonaws.com/prod',
    cart: 'https://fl77jbmmw1.execute-api.us-east-1.amazonaws.com/prod',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: false,
    bff: true,
    cart: false,
  },
};
