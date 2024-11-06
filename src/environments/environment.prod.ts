import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    products: 'https://vucnav1i8f.execute-api.us-east-1.amazonaws.com/prod',
    order: 'https://w36pljexld.execute-api.us-east-1.amazonaws.com/prod',
    import: 'https://h0qrlvm61j.execute-api.us-east-1.amazonaws.com/prod',
    bff: 'https://vucnav1i8f.execute-api.us-east-1.amazonaws.com/prod',
    cart: 'https://w36pljexld.execute-api.us-east-1.amazonaws.com/prod',
  },
  apiEndpointsEnabled: {
    products: true,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
