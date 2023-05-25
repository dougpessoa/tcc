import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as S from './styles'
import { Header } from '../../components/Header'
import { ParamsTypes } from '../../types'
import { useTypeAnoniMe } from '../../hooks/useTypeAnoniMe'

export function Message() {
  const { username, platform, id } = useParams<ParamsTypes>()
  const navigate = useNavigate();
  const { getMessage, message } = useTypeAnoniMe()

  useEffect(() => {
    if (id) {
      getMessage(id)
    }
  }, [getMessage, id])

  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.ProfileWrapper>
          <S.Title>
            @{username}
          </S.Title>
          <a href={`https://${platform}.com/${username}`} target="_blank" rel="noreferrer">
            {platform === 'instagram' ? <S.InstagramIcon /> : <S.TwitterIcon />}
          </a>
        </S.ProfileWrapper>
        <S.Content>
          {message}
        </S.Content>

        <S.ArrowIcon onClick={() => navigate(-1)} />

      </S.Content>
    </S.Wrapper>
  )
}