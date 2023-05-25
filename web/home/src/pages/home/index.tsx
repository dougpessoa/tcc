import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { SearchField } from '../../components/SearchField'
import { Button } from 'antd'
import { useTypeAnoniMe } from '../../contexts/useTypeAnoniMe'

export function Home() {
  const { noUserFound } = useTypeAnoniMe()
  return (
    <S.Wrapper>
      <S.Logo />
      <S.Texts>
        <S.Title>TypeAnoni.Me</S.Title>
        <S.Description>Envie mensagens anonimamente facilmente</S.Description>
      </S.Texts>
      <SearchField />
      <S.AlertArea>
        {noUserFound && (
          <S.NoUsers>Não há usuário mencionado para o termo descrito</S.NoUsers>
        )}
      </S.AlertArea>
      <S.ButtonArea>
        <Link to="/create-message">
          <Button>Deseja enviar uma mensagem?</Button>
        </Link>
      </S.ButtonArea>
    </S.Wrapper>
  )
}