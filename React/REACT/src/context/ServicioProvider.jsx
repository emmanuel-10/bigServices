import { createContext, useState, useEffect } from 'react'
import {toast} from 'react-toastify';
import clienteAxios from '../config/axios';


const ServicioContext = createContext();
const ServicioProvider = ({children}) => {

    const [categorias, setCategorias ] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({})
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        const nuevoTotal = pedido.reduce( (total, producto) => (producto.precio) + total, 0 )
        setTotal(nuevoTotal) 
    }, [pedido])

    const obtenerCategorias = async () => {
      
        try {
            const {data} = await clienteAxios('/api/categorias')
            setCategorias(data.data)
            setCategoriaActual(data.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])


    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        if(pedido.some( pedidoState => pedidoState.id === producto.id )) {
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado')    
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado')            
        }
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id )
        setPedido(pedidoActualizado)
        toast.success('Eliminado')
    }


    return (
        <ServicioContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEliminarProductoPedido,
                total
            }}
        >{children}</ServicioContext.Provider>
    )
}

export{
    ServicioProvider
}
export default ServicioContext
