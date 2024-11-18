import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    try {
        console.log("Cookies: ",req.cookies);
        
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        
        if (!token) {
            return res.status(401).json("You are not authenticated");
        }

        jwt.verify(token, process.env.SECRET, (err, data) => {
            if (err) {
                return res.status(403).json("Token is not valid");
            }

            req.userId = data.id;
            next();
        });
    } catch (error) {
        console.error("Error in verifyToken middleware:", error);
        return res.status(500).json(error);
    }
};


export default verifyToken;