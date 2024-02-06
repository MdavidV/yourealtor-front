import { TOKEN_SECRET, VERIFICATION_TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";

export function createAccesToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
        console.log(token);
      }
    );
  });
}

export const createVerificationToken = (userId) => {
  const token = jwt.sign({ userId }, VERIFICATION_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

export const verifyVerificationToken = (token) => {
  try {
    const decoded = jwt.verify(token, VERIFICATION_TOKEN_SECRET);
    return decoded.userId;
  } catch (error) {
    console.error("Error verifying verification token:", error);
    return null;
  }
};
