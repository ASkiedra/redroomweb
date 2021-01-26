const router = require('express').Router();
var Product = require('../models/product.model');

router.route('/').get((req, res) => {
  console.log(req)
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

// if rows are removed from here, the post request to put items in the database will give an error
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const imagename = req.body.imagename;
  const type = req.body.type;
  const color = req.body.color;  
  const price = req.body.price;
  const mainCategory = req.body.mainCategory;
  const orderBy = req.body.orderBy;
  const manufacturer = req.body.manufacturer;
  const productCode = req.body.productCode;
  const info = req.body.info;
  const available = req.body.available;
  const description = req.body.description;
  const extraField = req.body.extraField;
  
  
  const newProduct = new Product({
    name,
    imagename,
    type,
    mainCategory,
    color,
    price,
    orderBy,
    manufacturer,
    productCode,
    info,
    available,
    description,
    extraField
  });

  newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
}); 


// ROUTE THAT DISPLAYS PRODUCTS
router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;