import request from 'utils/request'
import getResponseError from 'utils/getResponseError'

const users = {
  async fetchUserByName(name) {
    try {
      const {data} = await request.get(`https://api.github.com/search/users/${name}`)
      return data
    } catch (error) {
      throw getResponseError(error)
    }
  },

  async fetchUserBySearchName(searchName) {
    try {
      const {data} = await request.get(`https://api.github.com/search/users?q=${searchName}`)
      return data
    } catch (error) {
      throw getResponseError(error)
    }
  },
}

export default users
