import axios from 'axios'

const MessageApi = axios.create({
  baseURL: 'http://154.12.237.236',
  timeout: 500000
})

export {
  MessageApi
}