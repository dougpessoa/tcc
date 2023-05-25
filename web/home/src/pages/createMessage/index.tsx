import React from 'react'
import * as S from './styles'
import { Input, Button, Tooltip, notification } from 'antd'
import { RadioField } from '../../components/RadioField'
import { Header } from '../../components/Header'
import { useForm, Controller } from 'react-hook-form';
import { MessageTypes } from '../../types'
import { useTypeAnoniMe } from '../../contexts/useTypeAnoniMe'

const message = "Digite o @ do usuário que você deseja mencionar no Twitter ou Instagram"

export function CreateMessage() {
  const { getValues, control } = useForm<MessageTypes>()
  const { handleCreateMessage, loading } = useTypeAnoniMe()

  function onSubmit(values: MessageTypes) {
    if (values.platform !== 0 && values.platform !== 1) return notification.warning({
      message: 'Selecione a rede social'
    })
    handleCreateMessage(values)
  }

  return (
    <S.Wrapper>
      <Header />
      <S.Content
        onSubmit={(e: any) => {
          e.preventDefault()
          onSubmit(getValues())
        }}
      >
        <S.FieldForm>
          <S.Label>
            Digite o @ do usuário {' '}
            <Tooltip title={message}>
              <S.DoubtIcon />
            </Tooltip>
          </S.Label>
          <Controller
            render={({ field }) => (
              <Input
                {...field}
                placeholder='@tim_cook'
                required
              />
            )}
            control={control}
            name="username"
          />
        </S.FieldForm>

        <S.FieldForm>
          <S.Label>
            Selecione a rede social
          </S.Label>
          <Controller
            render={({ field }) => (
              <RadioField
                {...field}
                options={[
                  {
                    value: 0,
                    label: 'Instagram',
                    default: true,
                  },
                  {
                    value: 1,
                    label: 'Twitter'
                  },
                ]}
              />
            )}
            control={control}
            name="platform"
          />

        </S.FieldForm>

        <S.FieldForm>
          <S.Label>
            Digite a sua mensagem
          </S.Label>
          <Controller
            render={({ field }) => (
              <Input.TextArea
                {...field}
                required
                placeholder='Descreva a mensagem anonima'
                rows={5}
              />
            )}
            control={control}
            name="message"
          />

        </S.FieldForm>
        <S.ButtonArea>
          <Button htmlType='submit' loading={loading} type='primary'>Enviar</Button>
        </S.ButtonArea>
      </S.Content>
    </S.Wrapper>
  )
}