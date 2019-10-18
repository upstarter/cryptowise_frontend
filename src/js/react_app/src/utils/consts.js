let env = process.env.NODE_ENV
export const url = env == 'development' ? '//localhost:8081' : 'https://api.cryptowise.ai'
export const api_url = `${url}/v1`


export default {
    url: url,
    api_url: api_url
};
