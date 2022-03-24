import express, { Request, Response }  from "express";
const User = require('../models/user');
const router = express.Router();

// Get All User 
router.get('/user-list', [], async(req: Request, res: Response) => {
  const resp = await User.find({});
  return res.send(resp);
});

// delete user
router.post('/delete-user', [], async(req: Request, res: Response) => {
  const userId = req.body.userId;
  
  const resp = await User.deleteOne({ _id: userId} );
  if(!resp) res.send('Error: Server');
  return res.send(resp);

});

// Insert User
router.post('/insert',async (req: Request, res: Response) => {
  var firstName = req.body.firstName; 
  var lastName = req.body.lastName;
  var email = req.body.email;
  var notes = req.body.note;

  const data = new User({
    firstName,
    lastName,
    email,
    notes
  });
  
  const resp = await data.save();
  if(!resp) return res.send('Error: Server');

  return res.send(resp);
});
export {router as user };