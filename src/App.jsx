import { Post } from './components/Post/Post';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

import styles from './App.module.css';
import './global.css';

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
