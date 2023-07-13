import { useContext } from 'react'
import ServicioContext from '../context/ServicioProvider'

const useServicio = () => {
    return useContext(ServicioContext)
}

export default useServicio