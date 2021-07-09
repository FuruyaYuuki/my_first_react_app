import styled from 'styled-components';

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

const FooterClass = styled.footer`
 height: 80px;
 text-align: center;
`

export const Footer = () => {

  return (
    <FooterClass>
      <Container>
        <p>(C) Onlien心療相談室 2021</p>
      </Container>
    </FooterClass>
  )
}