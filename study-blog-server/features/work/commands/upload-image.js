const multer = require('multer')
const sharp = require('sharp')
const fs = require('fs');
const registerRepo = require('../repository');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/images")
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${Math.floor(Math.random() * 1000)}${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

const upload = multer({ storage: storage }).single("file")

async function uploadImage(req, res) {
    let result = {};
    var id = null;
    try {
        id = req.user.id;
        console.log(id)
    } catch (error) {
        return res.status(401).send({ success: false, auth: false, message: "세션 정보가 없습니다." })
    }
    try {
        fs.readdir("uploads/images", (err) => {
            if (err) {
                fs.mkdirSync("uploads/images", {recursive:true});
            }
        })
        upload(req, res, err => {
            if (err) {
                console.error(err)
                return res.status(400).send({ success: false, err })
            }
            console.log(res.req.file)
            return res.status(200).send({ success: true, result: res.req.file.path })
        })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ success: false, error })
    }

}

module.exports = uploadImage;
