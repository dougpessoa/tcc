import { styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 100px 20px 20px 20px;
`

export const Logo = styled.img.attrs({
  src: '/assets/images/logo/logo.png'
})`
  max-width: 100px; 
  max-height: 100px;
  object-fit: contain;
`
export const Texts = styled.div`
  width: 100%; 
  text-align: center;
  margin-bottom: 25px;
`

export const Title = styled.h1`
  font-size: 25px; 
  font-weight: 700;
  margin-bottom: 10px;
`

export const Description = styled.p`
  font-size: 16px; 
`
export const ButtonArea = styled.div`
  margin-top: 10px;
`

export const NoUsers = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.error};
`

export const AlertArea = styled.div`
  width: 100%;
  text-align: center;
  height: 18px;
`