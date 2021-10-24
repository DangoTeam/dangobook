import UserRepository from '../repositories/UserRepository'

class UserController {
  async findAll(req, res) {
    const users = await UserRepository.findAll()

    return res.json(users)
  }

  async findByUsername(req, res) {
    const user = await UserRepository.findByUsername(req.query.username)

    if (!user) return res.json({ error: 'user not found' })

    return res.json(user)
  }

  async create(req, res) {
    if (await UserRepository.findByEmail(req.body.email))
      return res.json({ error: 'user already exists' })

    const user = await UserRepository.create(req.body)

    return res.json(user)
  }

  async delete(req, res) {
    if (!(await UserRepository.findByUsername(req.query.username))) {
      return res.json({ error: 'user not found' })
    }

    await UserRepository.delete(req.query.username)

    return res.json({ message: 'ok' })
  }

  async update(req, res) {
    if (!(await UserRepository.findByUsername(req.query.username)))
      return res.json({ error: 'user not found' })

    const user = await UserRepository.update(req.query.username, req.body)

    return res.json(user)
  }
}

export default new UserController()
