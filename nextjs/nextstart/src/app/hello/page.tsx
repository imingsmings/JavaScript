import styles from './page.module.css'

const Hello = () => {
  return (
    <div>
      <h1 className={styles.title}>Hello, Next.js 15 </h1>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Hello
