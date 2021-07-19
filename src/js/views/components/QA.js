import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
`

const ListItem = styled.h1`
  color: black;
  font-size: 20px;
  margin: 4px 4px;
`

const ListItem2 = styled.p`
  color: black;
  font-size: 20px;
  margin: 12px 4px;
`

const QALists = [
  {q:'Q. 朝起きるためにはどうしたらいいですか？', a:'A. 徹夜を利用して生活サイクルを激変させましょう!'},
  {q:'Q. 他人の目を気にしないためにはどうしたらいいですか？', a:'A. 何か１つ自信が持てることを成し遂げましょう！'},
  {q:'Q. 自分が嫌いになったらどうしたらいいですか？', a:'A. 誰か信頼してる人に話してみましょう！'},
  {q:'Q. 周りに迷惑をかけていると思ったらどうしたらいいですか？', a:'A. 迷惑をかけていると思う人に聞いてみましょう！'},
  {q:'Q. 外に出るのも嫌になったらどうしたらいいですか？', a:'A. 家の中でもいいので何か自信がつくことを成し遂げてみましょう！'},
  {q:'Q. 教室に入る時はどうしたらいいですか？', a:'A. 辛いとは思いますが休憩時間中に入るのが1番です！'},
  {q:'Q. 午後などの遅い時間帯に学校に行くのが恥ずかしいのはどうしたらいいですか？', a:'A. むしろ遅い時間でも学校に来るのは来る気はがとてもある証拠になると考えましょう！'},
  {q:'Q. あいうえおあいうえおあいうえおあいうえおあいうえお', a:'A. あいうえおあいうえおあいうえおあいうえおあいうえお'},
  {q:'Q. あいうえおあいうえおあいうえおあいうえおあいうえお', a:'A. あいうえおあいうえおあいうえおあいうえおあいうえお'},
  {q:'Q. あいうえおあいうえおあいうえおあいうえおあいうえお', a:'A. あいうえおあいうえおあいうえおあいうえおあいうえお'}
]

export const QA = () => {
  return (
    <div>
      {
        QALists.map((QALists, index) => {
          return <div key={index}>
            <StyledLink to="./Show"><ListItem>{QALists.q}</ListItem><ListItem2>{QALists.a}</ListItem2></StyledLink>
          </div>
        })
      }
    </div>
  );
}