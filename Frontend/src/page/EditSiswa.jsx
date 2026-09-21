import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/axios";

function EditSiswa() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nama: "",
        kodeSiswa: "",
        alamat: "",
        tgl_lahir: "",
        jurusan: ""
    })

    useEffect(() => {
        API
            .get(`/siswa/${id}`)
            .then((response) => {
                console.log("RESPONSE:", response);
                console.log("DATA:", response.data);
                console.log(response)
                setForm({
                    nama: response.data.nama,
                    kodeSiswa: response.data.kodeSiswa,
                    tgl_lahir: response.data.tgl_lahir,
                    jurusan: response.data.jurusan,
                    alamat: response.data.alamat
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            nama: form.nama,
            kodeSiswa: form.kodeSiswa,
            alamat: form.alamat,
            tgl_lahir: form.tgl_lahir,
            jurusan: form.jurusan

        }
        await
            API
                .put(`/siswa/${id}`, data)
                .then((response) => {
                    console.log(response)
                    alert("berhasil diubah")
                    navigate("/siswa")
                })
                .catch((error) => {
                    console.error(error)
                    alert("gagal diubah")
                })
                .finally(() => {

                })

    }

    return (
        <>
            <div className="container mt-5">
                <h3>Edit Siswa</h3>
                <hr />
                <div className="row g-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="nama" value={form.nama} name="nama" onChange={handleChange} placeholder="Nama" required />
                            <label htmlFor="nama"> Nama Siswa </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="kodeSiswa" value={form.kodeSiswa} name="kodeSiswa" onChange={handleChange} placeholder="Nama" required />
                            <label htmlFor="kodeSiswa">ID Siswa / NISN </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="tgl_lahir" value={form.tgl_lahir.split('T')[0]} name="tgl_lahir" onChange={handleChange} placeholder="Nama" required />
                            <label htmlFor="tgl_lahir">Tanggal lahir</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="jurusan" value={form.jurusan} name="jurusan" onChange={handleChange} required />
                            <label htmlFor="jurusan">Jurusan</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="alamat" value={form.alamat} name="alamat" onChange={handleChange} required />
                            <label htmlFor="alamat">Alamat</label>
                        </div>

                        <input type="submit" value="Submit" className="btn btn-success col-12 mt-2" />
                    </form>
                </div>
            </div>
        </>

    )

}
export default EditSiswa