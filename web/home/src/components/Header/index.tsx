import React from "react";
import * as S from './styles'
import { Link, useNavigate } from 'react-router-dom'

type HeaderProps = {
  description?: string
}

export function Header({ description }: HeaderProps) {
  const navigate = useNavigate()

  const goBack = () => navigate("../")
  return (
    <S.Wrapper>
      <S.HeaderContent>

        <S.Logo onClick={goBack} />

        {description && (
          <span>Mensagens anonimas para</span>
        )}

        <S.ArrowIcon onClick={goBack} />

      </S.HeaderContent>
    </S.Wrapper>
  )
}