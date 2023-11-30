import React from 'react'
import styles from "@/app/styles/rutaproyecto.module.css"
import Image from 'next/image'

const ProyectoAppCanciones = () => {
  return (
    <>
   <div className={styles.proyecto_container}>
        <h2 className={styles.titulo}>App Para subir Canciones</h2>
        <h2 className={styles.titulo}>Descripción del Proyecto</h2>
        <p className={styles.descripcion}>
          La aplicación permite tener un registro y inicio de sesión típico , a cada usuario se muestra su propia informacion.
          Puedes guardar el artista y nombre de canción. Para luego poder escucharlo en tu reproductor favorito.
        </p>
        <h2 className={styles.titulo}>Logros Del Proyecto</h2>
        <p className={styles.descripcion}>
         <li className='mb-3'> Funcionalidad de registro usuarios en el backend en la api y visualmente en el frontend, los usuarios de registran en una base de datos Postgres</li>
         <li> Funcionalidad de Inicio de Sesión en el backend en la api , y en el frontend. Se utilizo JWT para la validacion de usuarios en el backend.</li>   
        </p>


        <h2 className={styles.titulo}>Tecnologías Frontend</h2>
        <ul className={styles.listaTecnologias}>
          <Image className={styles.imagen} width={"500"} height={"500"} alt='imagen de react.js' src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1701375932/nz81bb1qsgpeop5bmoza.jpg"}></Image>
          <Image className={styles.imagen} width={"500"} height={"500"} alt='imagen de react.js' src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1701376094/ywogkbjrbbf42idq9z1y.png"}></Image>
          <Image className={styles.imagen} width={"500"} height={"500"} alt='imagen de react.js' src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1701376157/f3cy1kjbinz9lpjhrbll.webp"}></Image>
          <Image className={styles.imagen} width={"500"} height={"500"} alt='imagen de react.js' src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1701376203/p8g06fnqvaep9xln0oqe.png"}></Image>
          <Image className={styles.imagen} width={"500"} height={"500"} alt='imagen de react.js' src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1701376262/ppjy9hjwwk74ucgx5r5f.png"}></Image>
        </ul>

        <h2 className={styles.titulo}>Tecnologías Backend</h2>
        <ul className={styles.listaTecnologias}>
          <Image className={styles.imagen} width={"500"} height={"500"} alt='imagen de react.js' src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1701375932/nz81bb1qsgpeop5bmoza.jpg"}></Image>
          <Image className={styles.imagen} width={"500"} height={"500"} alt='imagen de react.js' src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1701376094/ywogkbjrbbf42idq9z1y.png"}></Image>
          <Image className={styles.imagen} width={"500"} height={"500"} alt='imagen de react.js' src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1701376157/f3cy1kjbinz9lpjhrbll.webp"}></Image>
          <Image className={styles.imagen} width={"500"} height={"500"} alt='imagen de react.js' src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1701376203/p8g06fnqvaep9xln0oqe.png"}></Image>
          <Image className={styles.imagen} width={"500"} height={"500"} alt='imagen de react.js' src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1701376262/ppjy9hjwwk74ucgx5r5f.png"}></Image>
        </ul>



      </div>
    </>
  )
}

export default ProyectoAppCanciones