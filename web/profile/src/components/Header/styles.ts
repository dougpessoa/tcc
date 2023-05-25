import { styled } from "styled-components";
import { ArrowLeftShort } from '../../styles/icons'

export const Wrapper = styled.header`
  width: 100%; 
  padding: 20px;
  height: 50px; 
  display: flex; 
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const HeaderContent = styled.div`
  margin: 0 auto; 
  display: flex; 
  width: 100%;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img.attrs({
  src: '/assets/images/logo/logo.png'
})`
  max-width: 50px; 
  max-height: 50px;
  object-fit: contain;
`

export const ArrowIcon = styled(ArrowLeftShort)`
  width: 26px;
  height: 26px; 
  margin-top: -2px;
  color: ${({ theme }) => theme.info};
`