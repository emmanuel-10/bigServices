import {useState, useEffect} from 'react'
import useServicio from "../hooks/useServicio"
import { formatearDinero } from "../helpers";


export default function ModalProducto() {

  const { producto, handleClickModal,handleAgregarPedido,pedido } = useServicio();
  const [edicion, setEdicion] = useState(false)
  

  useEffect(() => {
    if(pedido.some( pedidoState => pedidoState.id === producto.id )) {
        const productoEdicion = pedido.filter( pedidoState => pedidoState.id === producto.id)[0]
        
        setEdicion(true)
    } 
  }, [pedido])

  return (
      <div className="md:flex gap-5">
          <div className="md:w-1/3">
              <img
                  alt={`Imagen producto ${producto.nombre}`}
                  src={`/img/${producto.imagen}.jpg`}
              />
          </div>

          <div className="md:w-2/3">
              <div className="absolute top-0 right-0 p-3">
                  <button onClick={handleClickModal}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </button>
              </div>

              <h1 className="text-3xl font-bold mt-5 text-center">
                {producto.nombre}
              </h1>
              <p className="mt-5 font-black text-5xl text-amber-500 text-center">
                {formatearDinero(producto.precio)}
              </p>


              <div className="text-center">
              <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                onClick={() => {
                handleAgregarPedido({...producto})
                handleClickModal()
              }}
              >
              {edicion ? 'Guardar Cambios' : 'Agregar'}
              </button>
              </div>

          </div>
      </div>
  )
}
