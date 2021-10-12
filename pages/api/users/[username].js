import UserController from '../../../controllers/UserController'

export default function Handle(req, res) {
  switch (req.method) {
    case 'GET':
      UserController.findById(req, res)
    break
  
    case 'PUT':
      UserController.update(req, res)
    break

    case 'DELETE':
      UserController.delete(req, res)
    break
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
}