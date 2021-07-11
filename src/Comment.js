import styled from 'styled-components';
import { Header } from "./Header"

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding-left: 300px;
`

export const Comment = () => {
  return (
    <div>
      <Header />
      <Container>
        <h1>このWebサイトは、<br></br>病気によって、<br></br>不登校になった経験がある、<br></br>現大学生のアドバイスページです。</h1>
      </Container>
    </div>
  );
}