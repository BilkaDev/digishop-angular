import { getEnv } from "./env";

export const environment = {
  production: true,
  apiUrl: getEnv().apiUrl,
};
