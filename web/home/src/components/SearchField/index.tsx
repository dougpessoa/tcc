import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles'
import { AutoComplete, Input } from 'antd';
import { useDebounce } from '../../hooks/useDebounce';
import { AutoCompleteRenderItem } from './AutoCompleteRenderItem'
import { OptionProps, SocialTypeProps } from '../../types';
import { useTypeAnoniMe } from '../../contexts/useTypeAnoniMe';


export function SearchField() {
  const { debounce, isLoading } = useDebounce()
  const { searchUser, users, loading } = useTypeAnoniMe()
  const navigate = useNavigate();

  function handleSearch(username: string) {
    return searchUser(username)
  }

  function renderItem(title: string, type: SocialTypeProps, id?: string): OptionProps {
    return {
      id,
      value: `${title} - ${id}`,
      username: title,
      type,
      label: <AutoCompleteRenderItem title={title} type={type} />,
    }
  }

  function handleSelect({ type, username }: OptionProps) {
    return window.location.href = window.location.origin + `/user/${username}/${type === 0 ? 'instagram' : 'twitter'}`
  }

  const options = useMemo(() => {
    return users ? users.map(({ _id, _source }) => renderItem(_source.username, _source.platform, _id)) : []
  }, [users])

  return (
    <S.Wrapper>
      <AutoComplete
        popupClassName="certain-category-search-dropdown"
        style={{ width: '100%' }}
        options={options}
        onSelect={(_, options) => handleSelect(options)}
        onSearch={(search) => debounce(search, handleSearch)}
        filterOption={(inputValue: any, option: any) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      >
        <Input.Search placeholder="Pesquise o usuário aqui" enterButton loading={isLoading || loading} />
      </AutoComplete>
    </S.Wrapper >
  )
}