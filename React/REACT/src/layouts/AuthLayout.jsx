import { Outlet } from "react-router-dom"
export default function AuthLayout() {
  return (
    <main className='max-w-5xl m-auto flex flex-col md:flex-row items-center'>
    <img
        src='https://i.ibb.co/M246FnB/2023-06-13-23h39-55.png'
        alt='imagen logotipo'
        className="max-w-xs"
    />

    <div className='p-10 w-full'>
        <Outlet />
    </div>
    
    </main>
  )
}
