import styled from 'styled-components';
import { Header } from "./Header"

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

const QAStyle = styled.h1`
  color: black;
  font-size: 30px;
  margin: 30px 4px 0px 4px;
`

const By = styled.p`
  color: black;
  font-size: 30px;
  margin: 30px 4px 0 4px;
`

export const Show = () => {

  return (
    <div>
      <Header />
      <Container>
        <QAStyle>Q. 朝起きるためにはどうしたらいいですか？</QAStyle>
        <QAStyle>A. 徹夜を利用して生活サイクルを激変させましょう!</QAStyle>
        <By>Q by 相談室長</By>
        <By>A by 相談室長</By>
      </Container>
    </div>
  );
}