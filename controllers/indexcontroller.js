exports.UserSignup=function(req,res)
{
res.send("Signup page");
};

exports.UserLogin=function(req,res)
{
res.send("Log-in page");
};

exports.UserEmail=function(req,res)
{
  res.send("User Email" + JSON.stringify(req.params)  );
};

exports.UserPassword=function(req,res)
{
 res.send("User Password" + JSON.stringify(req.params)  );
 
};

exports.UserChPassword=function(req,res)
{
  res.send("User change-Password page" + JSON.stringify(req.params)  );
};