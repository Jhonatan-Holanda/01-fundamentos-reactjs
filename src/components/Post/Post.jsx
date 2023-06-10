import styles from './Post.module.css';

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://media.licdn.com/dms/image/C4D03AQGDMiwfIU7Vig/profile-displayphoto-shrink_800_800/0/1660323966985?e=1691625600&amp;v=beta&amp;t=3LezdeKoWKlgYWC67jyHWjToQYLCyDro5GNMQGKmRKg"/>
          <div className={styles.authorInfo}>
            <strong>
              Jhonatan Holanda
            </strong>
            <span>
              Web Developer
            </span>
          </div>
        </div>

        <time title="10 de Junho às 13:15" dateTime="2023-06-10 13:15:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}