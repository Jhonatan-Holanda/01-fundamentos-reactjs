import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media.licdn.com/dms/image/C4D03AQGDMiwfIU7Vig/profile-displayphoto-shrink_800_800/0/1660323966985?e=1691625600&amp;v=beta&amp;t=3LezdeKoWKlgYWC67jyHWjToQYLCyDro5GNMQGKmRKg"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jhonatan Holanda</strong>
              <time title="10 de Junho às 14:30" dateTime="2023-06-10 14:30">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p> Muito bom Dev, Parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}