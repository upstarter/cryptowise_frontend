let env = process.env.NODE_ENV
export const url = env == 'development' ? 'http://localhost:4000' : 'https://cryptowise.ai'


export default {
    url: url,
};
