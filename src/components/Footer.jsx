

export const Footer = () => {
  return (
    <div>
         <footer className="bg-blue-500 text-white flex justify-between items-center p-4">
      <div className="text-center">
        <p>©2023 Empresa: <span className="text-black pl-1 py-1 text-xl font-bold">J4-DevWeb19.</span> Todos los derechos reservados.</p>
      </div>
      <div>
        <img
          src="/src/assets/img/jj.jpg" 
          alt="Logo"
          className="w-24 h-24 rounded-full" 
        />
      </div>
    </footer>
    </div>
  )
}

