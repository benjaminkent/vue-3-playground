import axios, { AxiosInstance } from 'axios'

const brewdogInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: ' https://api.punkapi.com/v2/',
})

class ApiClient {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async get(url: string, config: object = {}) {
    return await this.client
      .get(url, config)
      .then(response => response.data)
      .catch(error => {
        if (error.response) {
          console.warn(error.response)
        }

        throw error
      })
  }

  async getRandomBeer() {
    return await this.get('beers/random')
  }
}

export default new ApiClient(brewdogInstance)
