export const authorizeRole = (...allowedRoles) => {
    return (req, res, next) => {
        // Check if user is defined and has a role
        if (!req.user || !req.user.role) {
            return res.status(401).json({ message: "Unauthorized: User role is missing" });
        }

        // Check if the user's role is allowed
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" }); 
        }

        next();
    };
};
