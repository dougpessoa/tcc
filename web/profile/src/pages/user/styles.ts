import { css, styled } from "styled-components";
import { Twitter, Instagram } from '../../styles/icons'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Content = styled.div`
  width: 100%; 
  padding: 20px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProfileWrapper = styled.div`
  width: 100%; 
  margin: 0 auto;
  max-width: 700px;
  display: flex;
  background-color: white;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 25px; 
  font-weight: 600;
`
const iconCss = css`
  width: 45px; 
  height: 45px; 
`

export const TwitterIcon = styled(Twitter)`
 ${iconCss}
  color: #1DA1F2;
`
export const InstagramIcon = styled(Instagram)`
  ${iconCss}
  color: #E4405F;
`

export const NoMessages = styled.h2`
  font-size: 25px;
  margin-top: 50px;
  color: ${({ theme }) => theme.error};
`