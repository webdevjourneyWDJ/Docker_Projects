import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'http://'+location.hostname+':8081'
  })
}
