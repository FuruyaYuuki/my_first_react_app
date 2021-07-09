import styled from 'styled-components';

const HeaderClass = styled.header`
  height: 50px;
  background-color: rgb(80, 77, 77);
`

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: grid;

  grid-template-columns: 150px 150px 150px;
  justify-content: center;
  place-items: center;
`

const HeaderItem = styled.a`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.664);
  transition: all 0.5s;
  cursor: pointer;
  ${Container}:hover & {
    color: rgba(255, 255, 255, 0.973);
  }
`

const HeaderLogo = styled.img`
  width: 30px;
`


export const Header = () => {

  return (
    <HeaderClass>
      <Container>
        <HeaderItem>
          <a href=""><HeaderLogo src="https://1.bp.blogspot.com/-InPOgb5_C7g/XlyfoVtkSrI/AAAAAAABXnQ/hOiIFp5hNFsg_BmcqPogXmFLFb48iM78ACNcBGAsYHQ/s400/clipborad_hakui_man.png" alt="画像がありません"/></a>
        </HeaderItem>
        <HeaderItem>新規登録</HeaderItem>
        <HeaderItem>ログイン</HeaderItem>
      </Container>
    </HeaderClass>
  )
}