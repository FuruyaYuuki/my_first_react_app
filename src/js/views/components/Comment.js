import styled from 'styled-components';
import { Header } from "./Header"

const Container = styled.div`
  height: 867px;
  text-align: center;
  background-color: #dddddd;
`

const Title = styled.h1`
  font-size: 55px;
  margin: 0;
  padding-top: 8px;
`

const Text = styled.h2`
  font-size: 23px;
  margin: 0;
  padding-bottom: 10px;
`

const Doctor = styled.img`
  height: 705px;
  width: 1680px;
`

export const Comment = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title>Online心療相談室</Title>
        <Text>病気で不登校になった経験がある、</Text>
        <Text>現大学生のアドバイスページです。</Text>
        <Doctor src="https://pakutaso.cdn.rabify.me/shared/img/thumb/E146_ishidaiseikou.jpg.webp?d=1420" alt="画像がありません"/>
      </Container>
    </div>
  );
}