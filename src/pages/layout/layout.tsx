import { Header } from '@/components/header/header'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
    return (
        <div>
            <Header />
            <main className="mx-auto w-full p-4 lg:w-3/5">
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutPage
