import { Link } from 'react-router-dom'
import Categoria from './Categoria'
import useServicio from '../hooks/useServicio'


export default function Sidebar() {

    const {categorias} = useServicio()

  return (
    <aside className="md:w-72">
        <div className="">
                <img 
                    className="w-100"
                    src="/img/logotipo.png"
                    alt="Imagen Logo"
                />
        </div>

        <div className="flex items-center gap-4 border w-full p-3 hover:bg-blue-400 font-bold">
        <img
            alt="Imagen Perfil"
            src="/img/perfil.png"
            className="w-8"
        />
        Mis Datos
        </div>
        

        <div className="">
            
                {categorias.map(categoria => (
                    <Categoria
                    key={categoria.id}
                    categoria={categoria}
                    />
                ))}
        </div>


        <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                >
                    Cerrar Sesión
                </button>
        </div>
    </aside>
  )
}
