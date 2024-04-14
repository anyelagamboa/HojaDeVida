import React from 'react';
import iconnombre from '../assets/iconnombre.png';
import icontel from '../assets/icontel.png';
import iconcorreo from '../assets/iconcorreo.png';
import iconubic from '../assets/iconubic.png';

export const ContactoPage = () => {
    const contacto = {
        nombre: 'Anyela Paola Gamboa Vera',
        telefono: '3205642531',
        correo: 'Paogamboa31@gmail.com',
        ciudad: 'Pamplona - N de S'
    };

    return (
      <>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col d-flex flex-column align-items-center'>
              <div className="d-flex align-items-center mb-3">
                <img src={iconnombre} alt="Teléfono" className="rounded me-2" style={{ width: 30, height: 30 }} />
                <p className="mb-0">{contacto.nombre}</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <img src={icontel} alt="Teléfono" className="rounded me-2" style={{ width: 30, height: 30 }} />
                <p className="mb-0">{contacto.telefono}</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <img src={iconcorreo} alt="Correo" className="rounded me-2" style={{ width: 30, height: 30 }} />
                <p className="mb-0">{contacto.correo}</p>
              </div>
              <div className="d-flex align-items-center">
                <img src={iconubic} alt="Ubicación" className="rounded me-2" style={{ width: 30, height: 30 }} />
                <p className="mb-0">{contacto.ciudad}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default ContactoPage;
