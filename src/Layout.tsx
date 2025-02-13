import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Landing = lazy(async () => await import('./routes/Landing'))

function Layout() {
    return (
        <div className=' overflow-hidden'>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path='/' element={<Landing />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default Layout