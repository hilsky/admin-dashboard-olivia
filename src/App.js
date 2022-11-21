
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import DashboardUser from './views/dashboardUser';
import Login from './views/login';
import SideBar from './components/sidebar/SideBar'
import DetailUser from './views/detailUser';
import Hotel from './views/hotel';
import TambahUser from './views/tambahUser';



function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path='/' exact element={<DashboardUser />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/detail-user' exact element={<DetailUser />} />
        <Route path='/hotel' exact element={<Hotel />} />
        <Route path='/tambah-user' exact element={<TambahUser />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
