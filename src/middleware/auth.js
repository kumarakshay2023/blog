const jwt  = require('jsonwebtoken');

async function auth(req,res,next){

 const token = req.headers['authorization']?.replace('Bearer ', '');
 
 if (!token) return res.json({ statusCode: 401, message: 'Unauthorized' });

 const verified = jwt.verify(token,process.env.JWT_SECRET);

 req.user=verified;

 return next();

}

module.exports=auth;