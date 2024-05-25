import { getEnv } from "./env";

export const environment = {
  production: false,
  apiUrl: getEnv().apiUrl,
};
