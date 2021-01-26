import { api_url } from 'Utils/consts';

export const API = {
  TOKENS: `${api_url}/tokens`,
  TOPICS: `${api_url}/topics`,
  REGISTER_USER: `${api_url}/auth/create`,
  LOGIN_USER: `${api_url}/auth/sign_in`,
  CREATE_PROPOSAL: `${api_url}/proposals`,
  VIEW_PROPOSALS: `${api_url}/proposals`,
  // USER_TOPICS: 'https://www.cryptowise.ai/api/v1/users/:id/topics',
  // USER_TOKENS: 'https://www.cryptowise.ai/api/v1/users/:id/tokens',
}
