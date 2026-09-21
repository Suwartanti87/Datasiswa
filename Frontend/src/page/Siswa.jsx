import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import API from "../api/axios";

function Siswa() {
    const [ siswa, setSiswa] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        API.get("/siswa")
            //jika berhasil mendapatkan respon
            .then((response) => {
                console.log(response.data)
                setSiswa(response.data);
            })
            //jika gagal mendapatkan respon
            .catch((error) => {
                setError(error.message);
            })
            //jika selesai(berhasil atau gagal)
            .finally(() => {
                setLoading(false);
            })
    })

    const handleDelete =async (id)=>{
        const konfirmasi = window.confirm(
            "Apakah mau dihapus?",
        );
        if(!konfirmasi){
            return
        }
        await 
         API
            .delete(`/siswa/${id}`)

            .then((response)=> {
                console.log(response)
                alert("Data berhasil diihapus")
                //setelah menghapus data kemudian mengembalikan / merefresh data
                API.get("/siswa")
                .then((response)=>{
                    setSiswa(response.data)
                })
            })
            .catch((error)=>{
                console.error(error)
                alert("Data gagal dihapus")
            })
            .finally(()=>{
                
            })

    }
    return (
        <>

            <div className="container mt-5">
                <div>
                    <h1>Data Siswa</h1>
                </div>
                {loading && (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}
                <div className="cols-12 py-2">
                    <Link to="/tambah-siswa" className="btn btn-primary">Tambah</Link>
                </div>
                {!loading && !error && (
                    <div className="row g-4">
                        {siswa.map((post) => (
                            <div className="card" key={post.id}>
                                <div className="card-body">
                                    <div className="row align-items">
                                        <div className="col-4">
                                            <p className="card-title">Nama </p>
                                            <p className="card-title">ID Siswa </p>                                        
                                            <p className="card-title">Tanggal Lahir </p>
                                            <p className="card-title">Jurusan </p>
                                            <p className="card-title">Alamat </p>
                                        </div>
                                        <div className="col-4">
                                            <p>: {post.nama}</p>
                                            <p>: {post.kodeSiswa} </p>
                                            <p>: {post.tgl_lahir.split('T')[0]}</p>
                                            <p>: {post.jurusan}</p>
                                            <p>: {post.alamat}</p>
                                        </div>
                                        <div className="col-4 text-end">
                                            <Link to={`/edit-siswa/${post.id}`} className="btn btn-warning me-1">Edit</Link>
                                            <Link onClick={() => handleDelete(post.id)} className="btn btn-danger me-1">Hapus</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}



            </div>
        </>
    )
}

export default Siswa