import React, { useState, useEffect } from "react";

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
  const [filteredItems, setFiltered] = useState([]);　//追加

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

  return (
    <div>
      <form action="">
        <input
          value={value}
          onChange={handleSearch}
          type="text"
        />
        <input type="submit" value="SEARCH" />
        {/* onClick={callSearchFunction} */}
      </form>
      {!filteredItems
        ? items.map((item, index) => {
            return (
              <li key={index}>
                {item.q}
              </li>
            );
          })
        : filteredItems.map((item, index) => {
            return (
              <li key={index}>
                {item.q}
              </li>
            );
          })}
    </div>
  );
}