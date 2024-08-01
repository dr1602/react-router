import { Menu } from './pages/components/Menux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { BlogPage } from './pages/BlogPage'
import { ProfilePage } from './pages/ProfilePage'
import { BlogPost } from './pages/components/BlogPost'
import { LoginPage } from './pages/LoginPage'
import { LogoutPage } from './pages/LogoutPage'
import { AuthProvider } from './pages/hooks/auth'

// recuerda que HashRouter es un provider como funciona con React Context

// queremos que el auth provider este dentro, porque es muy probable que necesite llamar metodos y hooks de hashprovider

function App() {

  return (
    <>
      <HashRouter>
        {/* debe de aparecer en todas las paginas, muy recomendable que este dentro de hash router */}
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/blog' element={<BlogPage />} >
              <Route path=':slug' element={<BlogPost />} />
            </Route>

            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            
            <Route path='*' element={<p> Not found </p>} />
          </Routes>
        </AuthProvider>

      </HashRouter>
    </>
  )
}

export default App
