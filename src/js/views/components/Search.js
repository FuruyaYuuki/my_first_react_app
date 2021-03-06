import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from "./Header"

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

const ListItem = styled.li`
  list-style: none;
  margin: 20px 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
`


const SearchPlace = styled.input`
  height: 30px;
  width: 300px;
  margin-top: 20px;
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

export const Table= () => {
  const [items, setItems] = useState(QLists);
  const [value, setValue] = useState("");
  const [filteredItems, setFiltered] = useState([]); //追加
  // const [text, setText] = useState("");

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const newItems = items.filter((item) => {
      return (
        item.q.toLowerCase().indexOf(value) !== -1 
      );
    });
    setFiltered(newItems); //変更
  }, [value]);

  // const changeText = () => {
  //   setText(items);
  // }

  return (
    <div>
      <Header />
      <Container>
        <form action="">
          <SearchPlace
            value={value}
            onChange={handleSearch}
            type="text"
            placeholder="キーワードを入力"
          />
        </form>
        {!filteredItems
          ? items.map((item, index) => {
              return (
                <ListItem key={index}><StyledLink to="./Show">{item.q}</StyledLink></ListItem>
              );
            })
          : filteredItems.map((item, index) => {
              return (
                <ListItem key={index}><StyledLink to="./Show">{item.q}</StyledLink></ListItem>
              );
            })}
      </Container>
    </div>
  );
}