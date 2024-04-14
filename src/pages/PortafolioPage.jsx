import React from 'react';
import pagcf from '../assets/pagcf.png';
import pagjuegos from '../assets/pagjuegos.png';

export const PortafolioPage = () => {
  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          <h2 className=' text-center fw-bolder text-primary text-opacity-50'>Proyectos Academicos</h2>
          <div className='col d-flex flex-column align-items-center mb-5'>
            <p>Proyecto 1</p>
            <img src={pagcf} alt="educa" className="rounded me-2" style={{ width: 600, height: 300 }} />
          </div>
          <div className='col d-flex flex-column align-items-center'>
            <p>Proyecto 2</p>
            <img src={pagjuegos} alt="educación" className="rounded me-2" style={{ width: 600, height: 300 }} />
          </div>
        </div>
      </div>
    </>
  )
}
