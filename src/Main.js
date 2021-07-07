import styled from 'styled-components';
import { useState } from 'react';

const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

const QaLists = [
  {q:'朝起きるためにはどうしたらいいですか？', a:'徹夜を利用して生活サイクルを激変させましょう!'},
  {q:'他人の目を気にしないためにはどうしたらいいですか？', a:'あ'},
  {q:'自分が嫌いになったらどうしたらいいですか？', a:'あ'},
  {q:'周りに迷惑をかけていると思ったどうしたらいいですか？', a:'あ'},
  {q:'外に出るのも嫌になったらどうしたらいいですか？', a:'あ'}
]

export const Main = () => {

  return (
    <div>
      <h4>質問一覧</h4>
      {
        QaLists.map((QaList, index) => {
          return <ListItem key={index}>{ QaList.q }</ListItem>
        })
      }
    </div>
  )
}