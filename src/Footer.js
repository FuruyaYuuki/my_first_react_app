import styled from 'styled-components';

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

const FooterClass = styled.footer`
 height: 50px;
 background-color: rgb(236, 236, 236);
 text-align: center;
`

const FooterText = styled.p`
  padding-top: 10px;
`

export const Footer = () => {

  return (
    <FooterClass>
      <Container>
        <FooterText>(C) Online心療相談室 2021</FooterText>
      </Container>
    </FooterClass>
  )
}