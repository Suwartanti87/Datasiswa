import API from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TambahSiswa(){
    const [form, setForm] = useState({
        nama:"",
        kodeSiswa:"",
        alamat:"",
        tgl_lahir:"",
        jurusan:""
        });

    const navigate = useNavigate();

    //menyimpan data inputan 
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // mengirim dataa inputan ke api
    const handleSubmit = async(e) =>{
        e.preventDefault();

        await
          API 
           .post('/siswa', form)
           .then((response)=>{
            console.log(response)
            alert("Berhasil ditambahkan")
            navigate("/siswa")
           })
           .catch((error)=>{
            console.error(error)
           })
           .finally(()=>{
            
           })
    }

    return (
        <>
        <div className="container mt-5">
            <h3>Tambah Siswa</h3>
        
        <hr />
        <div className="row g-4">
            <form onSubmit={handleSubmit} >
                 <div className="form-floating mb-3"> 
                <input type="text" className="form-control" id="nama" value={form.nama} name="nama" onChange={handleChange}  required /> 
                <label htmlFor="nama">Nama Siswa </label> 
                </div> 
                <div className="form-floating mb-3"> 
                <input type="text" className="form-control" id="kodeSiswa" value={form.kodeSiswa} name="kodeSiswa" onChange={handleChange}  required /> 
                <label htmlFor="kodeSiswa">ID Siswa / NISN </label> 
                </div> 
                <div className="form-floating mb-3"> 
                <input type="date" className="form-control" id="tgl_lahir" value={form.tgl_lahir} name="tgl_lahir" onChange={handleChange}  required /> 
                <label htmlFor="tgl_lahir">Tanggal Lahir</label> 
                </div> 
                <div className="form-floating mb-3"> 
                <input type="text" className="form-control" id="jurusan" value={form.jurusan} name="jurusan" onChange={handleChange}  required /> 
                <label htmlFor="jurusan">Jurusan</label> 
                </div>  
                <div className="form-floating mb-3"> 
                <input type="text" className="form-control" id="alamat" value={form.alamat} name="alamat" onChange={handleChange}  required /> 
                <label htmlFor="alamat">Alamat</label> 
                </div>
                
                
                <input type="submit" value="Submit" className="btn btn-success col-12 mt-2" />
            </form>
        </div>
        </div>
        </>
    )

}

export default TambahSiswa