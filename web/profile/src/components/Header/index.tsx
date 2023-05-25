import React from "react";
import * as S from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { navigation } from "../../utils/navigation";

type HeaderProps = {
  description?: string
}

export function Header({ description }: HeaderProps) {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)
  const goHome = () => navigation('/home')
  return (
    <S.Wrapper>
      <S.HeaderContent>

        <S.Logo onClick={goHome} />

        {description && (
          <span>Mensagens anonimas para</span>
        )}

        <S.ArrowIcon onClick={goBack} />

      </S.HeaderContent>
    </S.Wrapper>
  )
}