import useServicio from "../hooks/useServicio"
import { formatearDinero } from "../helpers"
export default function Servicio({producto}) {

  const {handleClickModal,handleSetProducto} = useServicio();
  const {nombre,imagen,precio} = producto

  return (
    <div className="border p-3 shadow bg-white">
      <img 
      alt={`imagen ${nombre}`}
      className="w-full"
      src={`/img/${imagen}.jpg`} 
      />

      <div className="p-3">
        <h1 className="text-2xl font-bold text-center">{nombre}</h1>
        <p className="mt-5 font-black text-3xl text-amber-500 text-center">{formatearDinero(precio)}</p>
      </div>

      <button type="button" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
      onClick={() => {
        handleClickModal();
        handleSetProducto(producto);
      }}
      >
        Contratar
      </button>
    </div>
  )
}
