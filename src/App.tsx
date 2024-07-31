import { Menu } from './pages/components/Menux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { BlogPage } from './pages/BlogPage'
import { ProfilePage } from './pages/ProfilePage'
import { BlogPost } from './pages/components/BlogPost'

// recuerda que HashRouter es un provider como funciona con React Context

function App() {

  return (
    <>
      <HashRouter>
        {/* debe de aparecer en todas las paginas, muy recomendable que este dentro de hash router */}
        <Menu />

        

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:slug' element={<BlogPost />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<p> Not found </p>} />
        </Routes>

      </HashRouter>
    </>
  )
}

export default App
