import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Home } from "./Home"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const ListItem = styled.h1`
  color: black;
  font-size: 20px;
  margin: 16px 4px;
`


export const QLists = [
  {q:'Q. 朝起きるためにはどうしたらいいですか？', name:'相談室長'},
  {q:'Q. 他人の目を気にしないためにはどうしたらいいですか？', name:'相談室長'},
  {q:'Q. 自分が嫌いになったらどうしたらいいですか？', name:'相談室長'},
  {q:'Q. 周りに迷惑をかけていると思ったらどうしたらいいですか？', name:'相談室長'},
  {q:'Q. 外に出るのも嫌になったらどうしたらいいですか？', name:'相談室長'},
  {q:'Q. 教室に入る時はどうしたらいいですか？', name:'相談室長'},
  {q:'Q. 午後などの遅い時間帯に学校に行くのが恥ずかしいのはどうしたらいいですか？', name:'相談室長'},
  {q:'Q. あいうえおあいうえおあいうえおあいうえおあいうえお', name:'相談室長'},
  {q:'Q. あいうえおあいうえおあいうえおあいうえおあいうえお', name:'相談室長'},
  {q:'Q. あいうえおあいうえおあいうえおあいうえおあいうえお', name:'相談室長'}
];

export const Q = (langs) => {

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