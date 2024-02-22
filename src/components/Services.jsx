//import React from 'react';

export const Services = () => {
  return (
    <section className="p-4">
     <h2 className="text-2xl font-bold mb-4">Nuestro Servivios</h2>

     <div className="md:flex md: justify-between">
        <img src="/src/assets/img/depositphotos_109037276-stock-photo-woman-using-laptop.jpg" className="w-full h-64 object-cover mb-2"></img>
        <h4 className="text-2xl font-bold mb-4">
        Creación de Software 
        </h4>
        <p>Desarrollamos soluciones de software personalizadas para ayudar a tu negocio a crecer.</p>
     </div>

     <div className="md:flex md: justify-between p-4">
        <img src="/src/assets/img/diseno-paginas-web-pymes.png" className="w-full h-64 object-cover mb-2"></img>
        <h4 className="text-2xl font-bold mb-4">
        Creación y diseño de Páginas web
        </h4>
        <p>Creamos sitios web atractivos y funcionales que capturan la esencia de tu marca.</p>
     </div>

     <div className="md:flex md: justify-between p-4">
        <img src="/src/assets/img/app-1013616_960_720.jpg" className="w-full h-64 object-cover mb-2"></img>
        <h4 className="text-2xl font-bold mb-4 p-2">
        Desarrollo de Aplicaciones.
        </h4>
        <p>Construimos aplicaciones móviles intuitivas y eficientes para iOS y Android.</p>
     </div>
    </section>
  );
};

export default Services;
