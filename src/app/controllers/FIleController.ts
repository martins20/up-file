import { Request, Response } from 'express';

class FileController {
  store(req: Request, res: Response) {
    const { filename } = req.file;

    const path = `uploads/${filename}`;

    res.json({
      link: path,
    });
  }
}

export default new FileController();
