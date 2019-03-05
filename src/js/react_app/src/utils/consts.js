let env = process.env.NODE_ENV
export const url = env == 'development' ? 'http://localhost:4000' : 'https://cryptowise.ai'
export const api_url = `${url}/api/v1`


export default {
    url: url,
    api_url: api_url
};
