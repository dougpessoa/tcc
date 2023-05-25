import { styled } from "styled-components";
import { PatchQuestionFill } from '../../styles/icons'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Content = styled.form`
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