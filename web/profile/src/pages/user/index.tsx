import React, { useEffect } from 'react'
import * as S from './styles'
import { MessageItem } from '../../components/MessageItem'
import { Header } from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useTypeAnoniMe } from '../../hooks/useTypeAnoniMe'
import { ParamsTypes } from '../../types'

const username = "odougpessoa"
const platform: any = "twitter"

export function User() {
  const { username, platform } = useParams<ParamsTypes>()
  const { messages, getAllMessages } = useTypeAnoniMe()

  useEffect(() => {
    if (username && platform) {
      getAllMessages(username, platform)
    }
  }, [username, platform, getAllMessages])

  return (
    <S.Wrapper>
      <Header description='Mensagens anonimas para' />
      <S.Content>
        <S.ProfileWrapper>
          <S.Title>
            @{username}
          </S.Title>
          <a href={`https://${platform}.com/${username}`} target="_blank" rel="noreferrer">
            {platform === 'instagram' ? <S.InstagramIcon /> : <S.TwitterIcon />}
          </a>
        </S.ProfileWrapper>
        {messages.length === 0 && (
          <S.NoMessages>
            Não há mensagens para essa conta
          </S.NoMessages>
        )}
        {messages.map((message: any) => (
          <MessageItem message={message.message} id={message._id} />
        ))}
      </S.Content>
    </S.Wrapper>
  )
}