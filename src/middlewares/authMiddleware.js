import pkg from "jsonwebtoken";

const jwt = pkg;

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if Authorization header is present and properly formatted
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization header is missing or malformed" });
    }

    const token = authHeader.split(" ")[1];

    // Verify the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log("The decoded user is: ", req.user);
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        res.status(400).json({ message: "Token is not valid" });
    }
};
