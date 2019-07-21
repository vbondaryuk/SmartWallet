export interface IAppConfig {
  env: {
    name: string;
  };
  apiServer: {
    authentication: string;
    smartwallet: string;
  };
}
