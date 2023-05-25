import { css, styled } from "styled-components";
import { ArrowLeftShort, PatchQuestionFill } from '../../styles/icons'
import { Twitter, Instagram } from '../../styles/icons'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Header = styled.header`
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

export const Content = styled.div`
  width: 100%; 
  max-width: 700px; 
  padding: 20px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DoubtIcon = styled(PatchQuestionFill)`
  width: 15px;
  height: 15px; 
  margin-top: -2px;
  color: ${({ theme }) => theme.warning};

`

export const FieldForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;

  label {
    font-size: px;
  }
`

export const Label = styled.label`
  font-size: 15px;
`
export const ButtonArea = styled.div`
  width: 100%; 
  display: flex; 
  justify-content: flex-end;
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