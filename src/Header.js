import styled from 'styled-components';

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

const HeaderClass = styled.header`
  height: 80px;
  width: 100%;
  background-color: black;
  top: 0;
  position: fixed;
  z-index: 10;
`

const HeaderLeft = styled.div`
  float: left;
`

const HeaderRight = styled.div`
  float: right;
  margin-right: 25px;
`

const HeaderLogo = styled.img`
  width: 50px;
`

const HeaderItem = styled.a`
  color: gray;
  line-height: 70px;
  padding: 0 25px;
  float: left;
  transition: all 0.5s;
  text-decoration: none;
  cursor: pointer;
  ${HeaderRight}:hover & {
    color: white;
  }
  /* displayblock未適応 */
`

export const Header = () => {

  return (
    <HeaderClass>
      <Container>
        <HeaderLeft>
          <HeaderLogo src="https://1.bp.blogspot.com/-InPOgb5_C7g/XlyfoVtkSrI/AAAAAAABXnQ/hOiIFp5hNFsg_BmcqPogXmFLFb48iM78ACNcBGAsYHQ/s400/clipborad_hakui_man.png" alt="画像がありません"/>
        </HeaderLeft>
        <HeaderRight>
          <HeaderItem>ホーム</HeaderItem>
          <HeaderItem>新規登録</HeaderItem>
          <HeaderItem>ログイン</HeaderItem>
        </HeaderRight>
      </Container>
    </HeaderClass>
  )
}