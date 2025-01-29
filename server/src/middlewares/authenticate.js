const jwt = require('jsonwebtoken');

// Middleware to validate the JWT and protect the route
module.exports = async (req, res, next) => {
  //Extract the token from the authonticated header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }
  
  // Remove "Bearer " from the header
  const token = authHeader.split(' ')[1]; 
  
  try {
    //Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //Attach the decoded user information to the request object
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or expired token'});
  }
  
};