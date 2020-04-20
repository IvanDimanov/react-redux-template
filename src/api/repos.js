import request from 'utils/request'
import getResponseError from 'utils/getResponseError'

const repos = {
  async fetchReposByUserName(userName) {
    try {
      const {data} = await request.get(`https://api.github.com/users/${userName}/repos`)
      return data
    } catch (error) {
      throw getResponseError(error)
    }
  },
}

export default repos
