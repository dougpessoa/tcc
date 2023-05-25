import axios from 'axios'

const MessageApi = axios.create({
  baseURL: 'http://localhost:1000',
  timeout: 500000
})

const SeekerApi = axios.create({
  baseURL: 'http://localhost:1001',
  timeout: 500000
})

export {
  MessageApi,
  SeekerApi
}