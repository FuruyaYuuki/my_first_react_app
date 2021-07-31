import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
`

const ListItem = styled.div`
  color: black;
  font-size: 20px;
  margin: 8px 0;
`

export const QA = ({ situmons }) => {
  return (
    <div>
      {
        situmons.map((situmon, index) => {
          return <StyledLink to="./Show"><ListItem key={index}>{ situmon }</ListItem></StyledLink>
        })
      }
    </div>
  )
}