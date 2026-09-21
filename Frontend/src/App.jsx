import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar'
import Beranda from './page/Beranda'
import Siswa from './page/Siswa'
import TambahSiswa from './page/TambahSiswa'
import EditSiswa from './page/EditSiswa'


import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>

              <Route path='/' element={<Beranda />} />

              <Route path='/siswa' element={<Siswa />} />
              <Route path='/tambah-siswa' element={<TambahSiswa />} />
              <Route path='/edit-siswa/:id' element={<EditSiswa />}/>
              

            </Routes>
          </main>
        </div>
      </BrowserRouter>



    </>
  )
}

export default App
