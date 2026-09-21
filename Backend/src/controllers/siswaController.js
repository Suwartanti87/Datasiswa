const prisma = require('../config/utils');
const { param } = require('../routes/siswaRoute');

const getAllSiswa = async (req, res)=>{
    try{
        const siswa = await prisma.siswa.findMany({
            
        });
        return res.json(siswa);

    } catch(error){
        console.error(error);

    }
}

const getSiswaById = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        const siswa = await prisma.siswa.findUnique({
            where:{id},
            
        });
        return res.json(siswa);

    } catch(error){
        console.error(error);
    }
}

//create
const createSiswa = async (req, res)=>{
    try{
        const {nama, kodeSiswa, alamat, tgl_lahir, jurusan}= req.body;
        const siswa = await prisma.siswa.create({
            data: {nama, 
                kodeSiswa,
                alamat,
                tgl_lahir:new Date(tgl_lahir),
                jurusan
        }
    });
    return res.json(siswa);

    } catch(error){
        console.error(error);
    }
}

//update
const updateSiswa = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        const {nama, kodeSiswa, alamat, tgl_lahir, jurusan}= req.body;

        const siswa = await prisma.siswa.update({
            where:{id},
            data:{nama,
                kodeSiswa, 
                alamat, 
                tgl_lahir:new Date(tgl_lahir), 
                jurusan
            }
        });
        return res.json(siswa);
    } catch(error){
        console.error(error);
    }
}

//delete
const deleteSiswa = async (req,res)=>{
    try{
        const id = parseInt(req.params.id);
        await prisma.siswa.delete({
            where: {id}
        });
        return res.json({message:'Berhasil dihapus'});

    }catch(error){
        console.error(error);
    }
}

module.exports = {
    getAllSiswa,
    getSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
}