declare global {
  type TConfig = {
    apiUrl: string;
  };

  const env: TConfig;
}

export const getEnv = () => ({
  apiUrl: env.apiUrl || "",
});
