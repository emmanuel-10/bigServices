import { Link } from "react-router-dom"
export default function Perfil() {
  return (

    <>
       
    <div className="flex bg-gray-500 p-4 text-white">
    <Link to="/" className="text-white hover:text-blue-200 mr-6">
        Ver Servicios
    </Link>
    <Link to="/" className="text-white hover:text-blue-200">
        Servicios Contratados
    </Link>
    </div>
            

  
    </>

    
  )
}
