import React, { createContext, useContext, useState, useCallback } from 'react'
import { MessageApi, SeekerApi } from '../services/api'
import { MessageTypes, TypeAnoniMeProps, TypeAnoniMeTypes } from '../types'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'
import { navigation } from '../utils/navigation'

const TypeAnoniMeContext = createContext<TypeAnoniMeTypes>(
  {} as TypeAnoniMeTypes
)

export const TypeAnoniMeProvider = ({ children }: TypeAnoniMeProps) => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [noUserFound, setNoUserFound] = useState(false)
  const navigate = useNavigate()

  const searchUser = useCallback(async (username: string) => {
    if (!username) return
    setLoading(true)
    setNoUserFound(false)

    const response = await SeekerApi.get(`/seeker/${username}`)
    const { hits } = response.data.result.hits

    if (hits.length === 0) {
      setNoUserFound(true)
    }

    setUsers(hits)
    setLoading(false)
  }, [])

  const handleCreateMessage = useCallback(async (data: MessageTypes) => {
    setLoading(true)

    try {
      const response = await MessageApi.post(`/messages`, data)

      navigation(response.data.response.router)
    } catch (err) {
      console.error(err)
      notification.error({
        message: 'Ops! Houve um erro ao enviar a mensagem! Tente novamente.'
      })
    }
    setLoading(false)
  }, [navigate])


  return (
    <TypeAnoniMeContext.Provider
      value={{
        loading,
        users,
        searchUser,
        handleCreateMessage,
        noUserFound
      }
      }
    >
      {children}
    </TypeAnoniMeContext.Provider>
  )
}

export const useTypeAnoniMe = () => useContext(TypeAnoniMeContext)