import { Post } from './Post';
import { Header } from './components/Header';

import './styles.css';

export function App() {
  return (
    <>
      <Header />

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
    </>
  )
}
