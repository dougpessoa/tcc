import { getClient } from "../client/elasticsearch";

class UsernameService {
  async saveUsername(username: string, platform: number) {
    const client = getClient()

    const result = await client.index({
      index: 'elastic_test',
      type: 'type_elastic_test',
      body: {
        username,
        platform
      }
    })

    return {
      result,
      status: 201
    }
  }

  async searchUsername(username?: string) {
    if (!username) return { result: null, status: 404 }

    const client = getClient()

    const result = await client.search({
      index: 'elastic_test',
      q: `username:*${username}*`
    })

    return {
      result,
      status: 200
    }
  }

  async deleteUsername(id: string) {
    const client = getClient()

    const result = await client.delete({
      id,
      index: 'elastic_test',
      type: 'type_elastic_test'
    })

    return {
      result,
      status: 200
    }
  }

  async deleteByUsername(username: string) {
    const client = getClient()

    const result = await client.deleteByQuery({
      body: {
        query: {
          match: {
            username,
          }
        }
      },
      index: 'elastic_test',
      type: 'type_elastic_test'
    })

    return {
      result,
      status: 200
    }
  }
}

export { UsernameService }