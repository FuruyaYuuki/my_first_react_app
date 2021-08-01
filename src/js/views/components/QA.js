import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListItem = styled.li`
  list-style: none;
  margin: 20px 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
`

export const QA = ({ situmons }) => {
  return (
    <div>
      {
        situmons.map((situmon, index) => {
          return <ListItem key={index}><StyledLink to="./Show">{ situmon }</StyledLink></ListItem>
        })
      }
    </div>
  )
}