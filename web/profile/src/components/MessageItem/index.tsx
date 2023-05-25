import React from "react"
import * as S from './styles'
import { Link, useParams } from "react-router-dom"
import { ParamsTypes } from "../../types"

type MessagesItemProps = {
  message: string
  id: string
}

export function MessageItem({ message, id }: MessagesItemProps) {
  const { username, platform } = useParams<ParamsTypes>()
  return (
    <S.Wrapper>
      <Link to={`/${username}/${platform}/message/${id}`}>
        <S.Content>
          {message}
        </S.Content>
      </Link>
    </S.Wrapper>
  )
}