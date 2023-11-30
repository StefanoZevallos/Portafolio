import React from 'react'
import styles from "@/app/styles/popup.module.css";

const PopUp = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
    <div className={styles.popup}>
      <button className={styles.closeButton} onClick={onClose} >
        Cerrar
      </button>
      <p>APP PARA SUBIR CANCIONES</p>
      <h1> Descripcion de la app</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
        elit. A consequatur placeat quia nesciunt consequuntur
        , pariatur eaque, dicta officia accusamus assumenda, 
        mollitia laudantium doloremque modi enim optio earum 
        tempore accusantium libero!</p>

      <p className='font-bold'> Frontend </p>
      <p> React.js </p>
      <p> HTML </p>
      <p> CSS </p>
      <p> TAILWIND </p>
      <p className='font-bold'> Backend </p>
      <p> Express.js</p>
      <p> Node.js </p>
      <p> Postgres sql</p>
    </div>
  </div>
  )
}

export default PopUp