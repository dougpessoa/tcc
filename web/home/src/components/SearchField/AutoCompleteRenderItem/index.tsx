import React from 'react'
import * as S from '../styles'
import { SocialTypeProps } from '../../../types'

type AutoCompleteRendeItem = {
  title: string
  type: SocialTypeProps
  id?: string
}

function SocialType({ type }: Pick<AutoCompleteRendeItem, 'type'>) {
  const isInstagram = type === 0

  return (
    <div>
      <S.SmallText>{isInstagram ? 'Instagram' : 'Twitter'}{' '}-{' '}</S.SmallText>
      {isInstagram ? <S.InstagramIcon /> : <S.TwitterIcon />}
    </div>
  )
}

export function AutoCompleteRenderItem({ title, type, id }: AutoCompleteRendeItem): any {
  return (
    <S.WrapperItem>
      @{title}

      <SocialType type={type} />
    </S.WrapperItem>
  )
}