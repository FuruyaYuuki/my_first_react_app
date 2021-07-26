import { useState } from 'react';
import { Header } from "./Header"
import { Main } from "./Main"
import { AddQ } from "./AddQ"
import { Q } from "./Q"
import { Footer } from "./Footer"

export const Home = () => {

  const [tab, setTab] = useState('q');

  return (
    <div>
      <Header />

      {
        tab === 'q' ? <Q langs={langs}/> : <AddQ />
      }
  
      <Footer />
    </div>
  );
}
