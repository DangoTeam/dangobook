import { prisma } from '../prisma/client'

class UserController {
  async findAll(req, res) {
    return res.json(await prisma.user.findMany())
  }

  async findById(req, res) {
    const user = await prisma.user.findUnique({
      where: {
        username: req.query.username,
      }
    })

    if (!user) return res.json({ error: 'user not found' })

    return res.json(user)
  }
  
  async create(req, res) {
    if (
      await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      })
    )
      return res.json({ error: 'user already exists' });

    const user = await prisma.user.create({
      data: req.body
    })

    return res.json(user)
  }

  async delete(req, res) {
    if (
      !(await prisma.user.findUnique({
        where: {
          username: req.query.id
        },
      }))
    ) {
      return res.json({ error: 'user not found' })
    }

    await prisma.user.delete({
      where: {
        username: req.query.id
      },
    })

    return res.json({ message: 'ok' })
  }

  async update(req, res) {
    if (
      !(await prisma.user.findUnique({
        where: {
          username: req.query.id
        },
      }))
    )
      return res.json({ error: 'user not found' })

    const user = await prisma.user.update({
      where: {
        username: req.query.id
      },
      data: req.body
    })

    return res.json(user)
  }
}

export default new UserController()
