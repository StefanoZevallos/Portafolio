import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-slate-700 w-full flex flex-col  py-5 h-4/5">
                        <div>
                        <p className='text-sky-600 font-bold text-lg '>Nuestra Empresa</p>
                        <p className='text-xs my-2 text-white '>Somos una empresa que da el servicio de directorio para 
                        personas interesadas en alquilar o comprar un departamento en los condominios ubicados en el distrito de Comas.
                        </p>
                        </div>
                        <div>
                        <p className='text-sky-600 font-bold text-lg'>Nuestro Servicio</p>
                        <p className='text-xs my-2 text-white '> Encontrarás en esta página un directorio de 
                        condominios disponibles , verás el precio , la ubicación , requisitos , y </p>
                        </div>
                        <div className='flex space-x-4 justify-center'>
                            <p> FACEBOOK</p>
                            <p> INSTAGRAM</p>
                            <p> TIKTOK</p>
                        </div>
                        <p>Copyrigth2023</p>
                        <p> Todos los derechos reservados</p>

            </div>

        </>

    )
}

export default Footer