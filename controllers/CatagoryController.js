exports.getCatagory = function (req, res) {
    res.send("Get Category");
};

exports.insertCatagory = function (req, res) {
    res.send("Insert Category");
};

exports.getEditPage = function (req, res) {
    res.send("Edit Category page" + JSON.stringify(req.params));
};

exports.editPage = function (req, res) {
    res.send("Edited Category Page" + JSON.stringify(req.params));
};

exports.deleteCatagory = function (req, res) {
    res.send("Delete Category" + JSON.stringify(req.params));
};