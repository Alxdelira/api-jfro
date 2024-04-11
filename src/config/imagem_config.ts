import multer, { Multer } from "multer";
import fs from "fs";
import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

export const createStorage = (req: Request, res: Response, next: NextFunction): void => {
  if (!fs.existsSync('imagens')) {
      fs.mkdirSync('imagens');
  }
  next();
};

const storage: multer.StorageEngine = multer.diskStorage({
  destination: (req: Express.Request, file: Express.Multer.File, cb: Function) => {
      cb(null, "imagens");
  },
  filename: (req: Express.Request, file: Express.Multer.File, cb: Function) => {
      cb(null, uuidv4() + "." + file.mimetype.split("/")[1]);
  },
});

const fileFilter: multer.Options['fileFilter'] = (req, file, cb) => {
    const errors: string[] = [];

    if (!/^image/.test(file.mimetype))
        errors.push("Tipo de arquivo inválido, envie somente imagens");

    if (errors.length > 0) return cb(null, false);

    cb(null, true);
};
  
export const upload: Multer = multer({
  storage,
  fileFilter,
  limits: {
      fileSize: 1024 * 1024 * 10,
  },
});
