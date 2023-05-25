import { css, styled } from "styled-components";
import { Search, Twitter, Instagram } from '../../styles/icons'

export const Wrapper = styled.div`
  width: 100%;
`

export const SearchIcon = styled(Search)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.info};
`

const iconStyle = css`
  width: 20px; 
  height: 20px; 
`

export const TwitterIcon = styled(Twitter)`
  ${iconStyle}
  color: #1DA1F2;
`

export const InstagramIcon = styled(Instagram)`
  ${iconStyle}
  color: #E4405F;
`

export const WrapperItem = styled.div`
  width: 100%; 
  display: flex; 
  justify-content: space-between;
  align-items: center;
`

export const SmallText = styled.span`
  font-size: 12px; 
`

export const NoUsers = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.error};
`