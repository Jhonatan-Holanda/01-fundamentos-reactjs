import { Post } from './Post';
import { Header } from './components/Header/Header';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            author="Jhonatan Maia"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel qui consectetur veniam explicabo veritatis facere. Odio sit optio hic, numquam iure quis, ipsum aut beatae, excepturi nulla ipsa totam minus."
          />

          <Post 
            author="Jhonatan Holanda"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel qui consectetur veniam explicabo veritatis facere. Odio sit optio hic, numquam iure quis, ipsum aut beatae, excepturi nulla ipsa totam minus."
          />

          <Post 
            author="Jose Albaceto"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel qui consectetur veniam explicabo veritatis facere. Odio sit optio hic, numquam iure quis, ipsum aut beatae, excepturi nulla ipsa totam minus."
          />

          <Post 
            author="Leonardo Maia"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel qui consectetur veniam explicabo veritatis facere. Odio sit optio hic, numquam iure quis, ipsum aut beatae, excepturi nulla ipsa totam minus."
          />
        </main>
      </div>
    </>
  )
}
