import useSWR from 'swr'
import Servicio from '../component/Servicio'
import useServicio from '../hooks/useServicio'
import clienteAxios from '../config/axios'

export default function Inicio() {

  const {categoriaActual} = useServicio()


  //Consulta SWR 
  const fetcher = () => clienteAxios('/api/servicios').then(data => data.data)
  const { data, error, isLoading } = useSWR('/api/servicios', fetcher)


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }


  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
    <p className='text-2xl mt-2 text-center'>
      Selecciona el Servicio que deseas contratar.
    </p>
    <h1 className='text-2xl font-bold text-center my-2'>{categoriaActual.nombre}</h1>

    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          {productos.map(producto => (
              <Servicio
                key={producto.imagen}
                producto={producto}
              />
          ))}
    </div>

    </>
  )
}
