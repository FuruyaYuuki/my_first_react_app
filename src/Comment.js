import styled from 'styled-components';
import { Header } from "./Header"

const Container = styled.div`
  height: 867px;
  margin: 10px 0;
  padding-left: 450px;
  background-image: url(https://pakutaso.cdn.rabify.me/shared/img/thumb/E146_ishidaiseikou.jpg.webp?d=1420);
  background-size: 1665px;
`

const Text = styled.h1`
  font-size: 60px;
  color: #111111;
  margin: 0;
  padding-top: 95px;
`

export const Comment = () => {
  return (
    <div>
      <Header />
      <Container>
        <Text>このWebサイトは、</Text>
        <Text>病気によって、</Text>
        <Text>不登校になった経験がある、</Text>
        <Text>現大学生のアドバイスページです。</Text>
      </Container>
    </div>
  );
}