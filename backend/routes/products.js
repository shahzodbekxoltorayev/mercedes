const express = require('express');
const Product = require('../models/products');
const Admin = require('../models/admin');
const multer = require('multer');
var fs = require('fs');
const router = express.Router();

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg'
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Errorrr");
        if (isValid) {
            error = null;
        }
        cb(error, "backend/images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
})
const upload = multer({ storage: storage })

router.post('/create/:token', upload.single('image'), async (req, res) =>{
  var body = req.body;
  var token = req.params.token;
  var admin = await Admin.find();
  const file = req.file;
  var obj = Admin.verifyOfAdmin(admin, token);

  var product = {
      name_uz: body.name_uz,
      name_ru: body.name_ru,
      description_uz: body.description_uz,
      description_ru: body.description_ru,
      id_number: body.id_number,
      // image:  image,
      image_original_name : file.filename, // file.filename,    //image file
      category_id: body.category_id,
      subcategory_id: body.subcategory_id,
      quantity: body.quantity,  //miqdori Number
      brand: body.brand,
      model: body.model,
      configuration: body.configuration,
      price: body.price,   //number
      sale: body.sale,     // sale
      date: new Date().toISOString().
                     replace(/T/, ' ').
                     replace(/\..+/, '')
  }
  var new_product = new Product(product);

  if (obj.isModerator) {
      new_product.save().then(result => {
          res.status(200).json(true);
      }).catch(err => {
          console.log(err);
          res.status(400).json({ message: "Error in Saved Pharm" })
      })
  } else {
      res.status(400).json({ message: "This is not Moderator" });
  }
} );


router.get('/getall', async(request, response, next) => {

    // let products = await Product.find();
    // if (pharms.logo) {
    //     pharms.logo = "/files/" + pharms.logo;
    // }

    // response.status(200).json(products)

    var product = [];
    var prod = {}
    Product.find().then( (all)=>{
        for(let i=all.length-1; i>=0; i--){
                prod = all[i];
                prod.image_original_name = 'http://localhost:5000' + '/images/' + all[i].image_original_name;
                product.push(prod);
        }
        response.status(200).json(product);
    }).catch( (err) =>{
        console.log(err);
        response.status(400).json({message: "Error in Get Pharms"});
    })

})


router.get('/getProduct/:id', async function(request, response, next) {
    var id = request.params.id;
    var prod = {}
      await Product.findById(id).then((res) => {
        if (!res) {
            data.message = "Product Not found";
            response.status(400).json({ message: "Product Not found" });
        } else {
            prod = res;
            prod.image_original_name = 'http://localhost:5000' + '/images/'  + res.image_original_name
            response.status(200).json(prod);
        }
    }).catch((err) => {
        console.log(err);
        response.status(400).json({ message: "Product Not found" });
    })
})

router.delete('/:id/:token', async function(request, response, next) {
    var id = request.params.id;
    var token = request.params.token;
    var admin = await Admin.find();

    var obj = Admin.verifyOfAdmin(admin, token);
    if (obj.isModerator) {
            await Product.findById(id).then( (res) =>{
               var image= res.image_original_name;
                fs.unlink('backend/images/' + image, function (err) {
                    if (err) {
                    console.log('File not deleted');}
                    else {
                        console.log('File deleted!');
                    }
                });
            });

            await Product.findByIdAndDelete(id).then((res) => {
                response.status(200).json({ message: true });
            })
            .catch((err) => {
                console.log(err);
                response.status(400).json({ message: false });
            })
    } else {
        console.log(obj)
        response.status(400).json({ message: "This is not Moderator" });
    }

})

router.patch('/updateProduct/:id/:token', multer({ storage: storage }).single('image'), async function(request, response, next) {
    var id = request.params.id;
    var token = request.params.token;
    var admin = await Admin.find();
    var obj = Admin.verifyOfAdmin(admin, token);
    if (obj.isModerator) {
      await Product.findById(id).then( (res) =>{
        var image= res.image_original_name;
         fs.unlink('backend/images/' + image, function (err) {
             if (err) {
             console.log(err.message);}
             else {
                 console.log('File deleted!');
             }
         });
     });
    var body = request.body;
    body.image_original_name = request.file.filename;
        await Product.findByIdAndUpdate(id, { $set: body }, { new: true }).then((res) => {
            if (res) {
                response.status(200).json(true);
            } else {
                response.status(400).json(false)
            }
        }).catch(err => {
            console.log(err);
            response.status(400).json(false);
        })
    }
    else {
      response.status(400).json(false);
    }
})


// Miqdorini o'zgartirish


router.patch('/updateQuanity/:id', async function(request, response) {
    var id = request.params.id;
    var rate = request.body;
    let body = {};
    var newRate;
    Product.findById(id).then(res => {
        newRate = res.quantity - rate.quantity;
        body.quantity = newRate;
        Product.findByIdAndUpdate(id, { $set: body }, { new: true }).then(res => {
            if (res) {
                response.status(200).json({ message: "Status: Success" })
            } else {
                response.status(400).json({ message: "Error in status" })
            }
        }).catch(err => {
            console.log(err);
            response.status(400).json(err);
        })
    })
})


router.post('/search', async(request, response) => {
    var body = request.body;


    var thisname_uz = body.name_uz;
    var thisname_ru = body.name_ru;

    await Pharmacy.find({ "name_uz": thisname_uz, "name_ru": thisname_ru }).then(all => {
        response.status(200).json(all);
    }).catch(err => {
        response.status(400).json({ message: "Error in search Phram" })
    })
})


router.get('/getfile', function(req, res) {
    var body = req.body;
    res.json({ 'file': '/files' + body });
});


module.exports = router;
