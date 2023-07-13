import useServicio from "../hooks/useServicio"

export default function Categoria({categoria}) {

 const {handleClickCategoria ,categoriaActual} = useServicio();
 const {icono, id, nombre} = categoria
  return (
    
    <div className={`${categoriaActual.id === id ? "bg-amber-400" : 'bg-white'} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
            <img 
                alt="Imagen Icono"
                src={`/img/logo/icono_${icono}.png`}
                className="w-10 h-5"
            />
            <button 
                className="text-lg font-bold cursor-pointer truncate"
                type="button"
                onClick={() => handleClickCategoria(id)}
            >
                {nombre}
            </button>
    </div>

  )
}
