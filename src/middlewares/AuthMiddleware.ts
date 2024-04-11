import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET: string = process.env.JWT_SECRET || '';

const AuthMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader: string | undefined = req.headers.authorization;

    if (!authHeader) {
         res.status(401).json({ message: 'Token de autenticação não fornecido' });
         return
    }

    const parts: string[] = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
       res.status(401).json({ message: 'Formato de token inválido' });
       return 
    }

    const token: string = parts[1];

    jwt.verify(token, SECRET, (err: VerifyErrors | null, decoded: any) => {
        if (err) {
            console.error("Erro durante a verificação do token:", err.message);
            return res.status(401).json({ message: 'Token inválido' });
        }
        if (decoded) {
            (req as any).usuario = { _id: decoded };
        }
        next();
    });
};

export default AuthMiddleware;

