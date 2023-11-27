import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { LoginPage } from '../pages/Login/LoginPage'
import { Register } from '../pages/Register/Register'
import LoginContextProvider from '../contexts/LoginContext/LoginContext'
import { DetailPage } from '../pages/DetailPage/DetailPage'
import { ReservaPage } from '../pages/ReservaPage/ReservaPage'

export function RouteList() {
  return (
    <>
      <BrowserRouter>
        <LoginContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/detail/:id/reservation" element={<ReservaPage />} />
          </Routes>
        </LoginContextProvider>
      </BrowserRouter>
    </>
  )
}
