import React from 'react'
import foto from '../assets/foto.png'

export const PerfilPage = () => {
  return (
    <>
      <div className='container mt-4'>
        <div className='row'  > 
          <div className='col d-flex justify-content-center mb-3'> 
            <img src={foto} className="rounded" style={{ width: 100, height: 'auto' }} />
          </div>
          <div className='text-center'>
            <p>Mi nombre es Anyela Gamboa. Soy una persona flexible y receptiva a nuevas ideas, lo cual me permite adaptarme rápidamente a los cambios. Actualmente, estoy cursando una carrera en Tecnología en Gestión de Redes y Sistemas Teleinformáticos, donde he desarrollado una sólida habilidad en la programación para el diseño de páginas web. Me apasiona la oportunidad de combinar mis conocimientos técnicos con mi capacidad de adaptación para crear soluciones innovadoras en el ámbito digital.</p>
          </div>
        </div>
      </div>
    </>
  )
}
