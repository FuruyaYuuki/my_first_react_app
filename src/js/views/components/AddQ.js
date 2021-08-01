import styled from 'styled-components'
import { useState } from 'react';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 15px;
  margin: 20px auto;
`

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`
const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`

const ButtonContainer = styled.div`
  margin-top: 24px;
`

const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #2196F3;
  padding: 8px 16px;
  min-width: 100px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  width: 120px;
`

export const AddQ = ({ onAddSitumon }) => {

  const [text, setText] = useState('');

  const submitAddQ = (event) => {
    event.preventDafault();
    onAddSitumon(text);
  }

  return (
    <div>
      <Container>
        <form onSubmit={submitAddQ}>
          <div>
            <Label>質問</Label>
            <Input 
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Q.〜 A.〜と入力"
            />
          </div>
          <ButtonContainer>
            <Button>質問する</Button>
          </ButtonContainer>
        </form>
      </Container>
    </div>
  )
}