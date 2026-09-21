import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Beranda() {
    return (
        <><div className="container mt-5">
            <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border text-center">
                <div className="container-fluid py-3">
                    <h1 className="display-5 fw-bold text-dark mb-3">
                        <i className="bi bi-mortarboard-fill text-primary me-2"></i>
                       Data Siswa
                    </h1>
                    <p className="col-md-8 mx-auto fs-5 text-muted">
                        Selamat datang di web Data siswa
                    </p>
                    <div className='row'>
                        <div className=' center'>
                            <Link to="/siswa" className="btn btn-success btn-lg w-100 fw-bold shadow-sm">
                                <i className="bi bi-arrow-right-circle me-2"></i>Data Siswa
                            </Link>
                        </div>
                       

                    </div>



                </div>
            </div>

        </div>
        </>
    )
}

export default Beranda;

