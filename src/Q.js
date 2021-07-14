import styled from 'styled-components';
import { Index } from "./pagination/Index"


const ListItem = styled.div`
  font-size: 30px;
  padding: 8px 16px;

  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
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
]

export const Q = () => {
  return (
    <div>
      {
        QLists.map((QLists, index) => {
          return <ListItem key={index}>
            {QLists.q}
          </ListItem>
        })
      }
      <Index />
    </div>
  );
}