import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
`

const ListItem = styled.h1`
  color: black;
  font-size: 20px;
  margin: 16px 4px;
`


const QLists = [
  {q:'Q. 朝起きるためにはどうしたらいいですか？'},
  {q:'Q. 他人の目を気にしないためにはどうしたらいいですか？'},
  {q:'Q. 自分が嫌いになったらどうしたらいいですか？'},
  {q:'Q. 周りに迷惑をかけていると思ったらどうしたらいいですか？'},
  {q:'Q. 外に出るのも嫌になったらどうしたらいいですか？'},
  {q:'Q. 教室に入る時はどうしたらいいですか？'},
  {q:'Q. 午後などの遅い時間帯に学校に行くのが恥ずかしいのはどうしたらいいですか？'},
  {q:'Q. あいうえおあいうえおあいうえおあいうえおあいうえお'},
  {q:'Q. あいうえおあいうえおあいうえおあいうえおあいうえお'},
  {q:'Q. あいうえおあいうえおあいうえおあいうえおあいうえお'}
];

export const Q = () => {

  return (
    <div>
      {
        QLists.map((QLists, index) => {
          return <div key={index}>
            <StyledLink to="./Show"><ListItem>{QLists.q}</ListItem></StyledLink>
          </div>
        })
      }
    </div>
  );
}