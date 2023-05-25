import create from "zustand";
import { MessageApi } from "../../services/api";

interface TypeAnoniMeTypes {
  messages: any[];
  loading: boolean
  message: string | undefined
  getAllMessages: (username: string, platform: string) => void
  getMessage: (id: string) => void
}

export const useTypeAnoniMe = create<TypeAnoniMeTypes>((set) => ({
  messages: [],
  loading: true,
  message: undefined,
  getAllMessages: async (username: string, platform: string) => {
    set({ loading: true })

    const response = await MessageApi.get(`/messages/${username}/${platform}`)

    set({ loading: false, messages: response.data.docs })
  },
  getMessage: async (id: string) => {
    set({ loading: true })

    const response = await MessageApi.get(`/messages/${id}`)

    set({ loading: false, message: response.data.message.message })
  }
}));