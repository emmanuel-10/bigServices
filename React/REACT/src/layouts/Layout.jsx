import {Outlet} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Modal from 'react-modal'
import Sidebar from '../component/Sidebar'
import Resumen from '../component/Resumen'
import useServicio from '../hooks/useServicio'
import ModalServicio from '../component/ModalServicio'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')
export default function Layout() {

  const {modal} = useServicio();

  return (
    <>
    <div className='md:flex'>
    <Sidebar/>

    <main className='flex-1 h-screen overflow-y-scroll bg-gray-100'>
      <Outlet/>
    </main>
    
     <Resumen/>    
     
    </div>


    <Modal isOpen={modal} style={customStyles}>
      <ModalServicio/>
    </Modal>

    <ToastContainer/>
    </>
  )
}
