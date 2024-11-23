import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ successs: false, message: "Unauthorized" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Unauthorized" });
  }
}
