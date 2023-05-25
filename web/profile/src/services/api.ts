import axios from 'axios'

const MessageApi = axios.create({
  baseURL: 'http://localhost:1000',
  timeout: 500000
})

export {
  MessageApi
}