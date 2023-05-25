import React from "react";
import * as S from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <S.Wrapper>
      <S.HeaderContent>
        <Link to="/">
          <S.Logo />
        </Link>
        <Link to="/">
          <S.ArrowIcon />
        </Link>
      </S.HeaderContent>
    </S.Wrapper>
  )
}