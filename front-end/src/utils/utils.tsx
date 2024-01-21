export const BASE_URL = 'http://localhost:3000/'

export const fetcher = (...args) => fetch(...args).then((response) => response.json())
