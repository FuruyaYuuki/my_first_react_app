import styled from 'styled-components';

const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

export const QALists = [
  {q:'Q. 朝起きるためにはどうしたらいいですか？', a:'A. 徹夜を利用して生活サイクルを激変させましょう!'},
  {q:'Q. 他人の目を気にしないためにはどうしたらいいですか？', a:'A. 何か１つ自信が持てることを成し遂げましょう！'},
  {q:'Q. 自分が嫌いになったらどうしたらいいですか？', a:'A. 誰か信頼してる人に話してみましょう！'},
  {q:'Q. 周りに迷惑をかけていると思ったらどうしたらいいですか？', a:'A. 迷惑をかけていると思う人に聞いてみましょう！'},
  {q:'Q. 外に出るのも嫌になったらどうしたらいいですか？', a:'A. 家の中でもいいので何か自信がつくことを成し遂げてみましょう！'}
]

export const QA = () => {
  return (
    <div>
      {
        QALists.map((QALists, index) => {
          return <ListItem key={index}>{QALists.q}<br></br>{QALists.a}</ListItem>
        })
      }
    </div>
  );
}