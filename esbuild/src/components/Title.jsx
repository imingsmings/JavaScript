import React from 'react'

// import '../styles/comp.css'
import styles from '../styles/comp.module.css'

function Tilte(props) {
    return <h1 className={styles.red}>{props.title}</h1>
}

export default Tilte
