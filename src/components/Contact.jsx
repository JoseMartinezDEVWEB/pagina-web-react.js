

export const Contact = () => {
  return (
    <>
    <div>
      <h1 className="text-2xl font-bold mb-4 p-2">Contact</h1>
    </div>
    <div className="md:w-1/2 p-2">
      <form className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          <input type="text" name="nombre" placeholder="Nombre" onChange='' className="w-full mb-2 p-2" required />
          <input type="text" name="apellido" placeholder="Apellido" onChange='' className="w-full mb-2 p-2" required />
          <input type="email" name="correo" placeholder="Correo" onChange='' className="w-full mb-2 p-2" required />
          <textarea name="descripcion" placeholder="Descripción del servicio solicitado" onChange='' className="w-full mb-2 p-2" required />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar Solicitud</button>
        </form>
    </div>
    <div className="md:w-1/2 p-2">
    <h2 className="text-2xl font-bold mb-2">Información de Contacto</h2>
        <p>Dirección: 123 Calle Principal, Ciudad, País</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Correo: ejemplo@dominio.com</p>
    </div>
    </>
  )
}

