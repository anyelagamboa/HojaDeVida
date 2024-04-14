import React from 'react';
import iconeduca from '../assets/iconeduca.png';
import iconeduc from '../assets/iconeduc.png';

  export const FormacionPage = () => {
    const contacto = {
      nombre: 'IE Escuela Normal Superior Pamplona',
      titulo: 'Bachiller',
      ciudad: 'Pamplona - N de S',
      año: 2018,
      nombre2: 'Instituto Superior de Educación Rural-ISER',
      titulo2: 'Tecnologa en Gestión de Redes y Sistemas Tele-Informaticos',
      año2: 2024
    };
  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col d-flex flex-column align-items-center'>
            <div ><img src={iconeduca} alt="educa" className="rounded me-2" style={{ width: 30, height: 30 }} />Primaria Y Secundaria</div>
            <div>{contacto.nombre}</div>
            <div >{contacto.ciudad}</div>
            <div>{contacto.titulo}</div>
            <div>{contacto.año}</div>
            </div>
          <div className='col d-flex flex-column align-items-center'>
            <div ><img src={iconeduc} alt="educación" className="rounded me-2" style={{ width: 30, height: 30 }} /> Tecnología</div>
            <div>{contacto.nombre2}</div>
            <div>{contacto.ciudad}</div>
            <div>{contacto.titulo2}</div>
            <div>{contacto.año2}</div> 
          </div>
        </div>
      </div>
    </>
  )
}
