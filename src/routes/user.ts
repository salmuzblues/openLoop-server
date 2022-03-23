import express, { Request, Response }  from "express";

const router = express.Router();

router.get('/user-list', [], (req: Request, res: Response) => {
  return res.send('users-list')
})

export { router as user }