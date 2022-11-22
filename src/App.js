
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import DashboardUser from './views/dashboardUser';
import Login from './views/login';
import SideBar from './components/sidebar/SideBar'
import Hotel from './views/hotel';
import Wisata from './views/wisata';
import Pemandu from './views/pemandu';
import Kuliner from './views/kuliner';
import DetailUser from './views/detailUser';
import DetailKuliner from './views/detailKuliner';
import DetailHotel from './views/detailHotel';
import DetailWisata from './views/detailWisata';
import DetailPemandu from './views/detailPemandu';
import TambahUser from './views/tambahUser';
import TambahKuliner from './views/tambahKuliner';
import TambahHotel from './views/tambahHotel';
import TambahWisata from './views/tambahWisata';
import TambahPemandu from './views/tambahPemandu';



function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path='/' exact element={<DashboardUser />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/hotel' exact element={<Hotel />} />
        <Route path='/wisata' exact element={<Wisata />} />
        <Route path='/pemandu' exact element={<Pemandu />} />
        <Route path='/kuliner' exact element={<Kuliner />} />
        <Route path='/detail-user/:id' exact element={<DetailUser />} />
        <Route path='/detail-kuliner/:id' exact element={<DetailKuliner />} />
        <Route path='/detail-hotel/:id' exact element={<DetailHotel />} />
        <Route path='/detail-wisata/:id' exact element={<DetailWisata />} />
        <Route path='/detail-pemandu/:id' exact element={<DetailPemandu />} />
        <Route path='/tambah-user' exact element={<TambahUser />} />
        <Route path='/tambah-kuliner' exact element={<TambahKuliner />} />
        <Route path='/tambah-hotel' exact element={<TambahHotel />} />
        <Route path='/tambah-wisata' exact element={<TambahWisata />} />
        <Route path='/tambah-pemandu' exact element={<TambahPemandu />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
