const jwt = require('jsonwebtoken');

// Middleware to validate the JWT and protect the route
module.exports = async (req, res, next) => {
  try {
    //Extract the token from the authonticated header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1]; // Remove "Bearer " from the header

    //Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Attach the decoded user information to the request object
    req.user = decoded;

    // Step 4: Proceed to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
  }
};