/** Refer env.d.ts */
const app: any = {
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  apiGatewayHost: import.meta.env.VITE_APP_API_GATEWAY_HOST,
};

export default app;
