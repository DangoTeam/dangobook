import UserController from '../../../controllers/UserController'

export default function Handle(req, res) {
  switch (req.method) {
    case 'GET':
      UserController.findAll(req, res)
    break

    case 'POST':
      UserController.create(req, res)
    break
  }
}