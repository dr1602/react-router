import { Header } from './pages/components/Header'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { BlogPage } from './pages/BlogPage'
import { ProfilePage } from './pages/ProfilePage'
import { BlogPost } from './pages/components/BlogPost'
import { LoginPage } from './pages/LoginPage'
import { LogoutPage } from './pages/LogoutPage'
import { AuthProvider, ProtectedRoute } from './pages/hooks/auth'
import Stars from './pages/components/Stars'

// recuerda que HashRouter es un provider como funciona con React Context

// queremos que el auth provider este dentro, porque es muy probable que necesite llamar metodos y hooks de hashprovider

function App() {

  return (
    <>
      <HashRouter>
        {/* debe de aparecer en todas las paginas, muy recomendable que este dentro de hash router */}
        <AuthProvider>
          <Header />

          <Stars/>

          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/blog' element={<BlogPage />} >
              <Route path=':slug' element={<BlogPost />} />
            </Route>

            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<ProtectedRoute><LogoutPage /></ProtectedRoute>} />
            <Route path='/profile' element={<ProtectedRoute> <ProfilePage /> </ProtectedRoute>} />
            
            <Route path='*' element={<p> Not found </p>} />
          </Routes>
        </AuthProvider>

      </HashRouter>
    </>
  )
}

export default App
