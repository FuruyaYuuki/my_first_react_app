import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
`

const HeaderClass = styled.header`
  height: 50px;
  background-color: rgb(80, 77, 77);
`

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: grid;

  grid-template-columns: 200px 200px 200px;
  justify-content: center;
  place-items: center;
`

const HeaderItem = styled.div`
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
        <StyledLink to="/">
          <HeaderItem><HeaderLogo src="https://1.bp.blogspot.com/-InPOgb5_C7g/XlyfoVtkSrI/AAAAAAABXnQ/hOiIFp5hNFsg_BmcqPogXmFLFb48iM78ACNcBGAsYHQ/s400clipborad_hakui_man.png" alt="画像がありません"/></HeaderItem>
        </StyledLink>
        <StyledLink to="/comment">
          <HeaderItem>Online心療相談室とは?</HeaderItem>
        </StyledLink>
        <StyledLink to="/search">
          <HeaderItem>🔍</HeaderItem>
        </StyledLink>
      </Container>
    </HeaderClass>
  )
}