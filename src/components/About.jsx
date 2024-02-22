import React, { useState } from 'react';
export const About = () => {
    
        const [showMore, setShowMore] = useState(false);
      
        const handleShowMore = () => {
          setShowMore(!showMore);
        };

    return (
      
      <section className="p-20 bg-gray-200 md:items-center m-4">
        <div className="md: w-1/2">
            <img src="/src/assets/img/descarga (4).jpeg" className="w-full h-auto md:rounded"></img>
        </div>

        <h2 className="text-2xl font-bold mb-2">Acerca de nosotros</h2>
        <p className="text-base text-gray-700">
          Somos una empresa dedicada a brindar soluciones innovadoras para mejorar la vida de nuestros clientes. Nuestro equipo está compuesto por profesionales altamente capacitados y comprometidos con la excelencia.
        </p>

        <button onClick={handleShowMore} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {showMore ? 'Mostrar menos' : 'Mostrar más'}
        </button>
      </section>
    );
  };

  const MoreContent = () => (
    <div>
      <p>Aquí puedes agregar más contenido que se mostrará cuando el usuario haga clic en "Mostrar más".</p>
    </div>
    
  );


export default About;
