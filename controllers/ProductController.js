exports.getProduct = function (req, res) {
    res.send("Get Product");
};

exports.insertProduct = function (req, res) {
    res.send("Add Product");
};

exports.editProduct = function (req, res) {
    res.send("Edit Product" + JSON.stringify(req.params));
};

exports.editedProduct = function (req, res) {
    res.send("Edited Products" + JSON.stringify(req.params));
};

exports.deleteProduct = function (req, res) {
    res.send("Delete Product" + JSON.stringify(req.params));
};