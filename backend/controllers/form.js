const Form = require('../models/form');

module.exports.recieveData = (req, res, next) => {
  const { tel, email, name, date } = req.body
  Form.create({
    tel, email, name, date
  })
  .then(() => {
    res.send({message: 'получено'})
  })
  .catch((err) => {
    console.log(err)
    res.status(500).send({message: 'произошла ошибка'})
  })
}
