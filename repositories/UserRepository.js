import prisma from '../prisma/client'

class UserRepository {
  findAll() {
    return prisma.user.findMany()
  }

  findByUsername(username) {
    return prisma.user.findUnique({
      where: {
        username,
      },
    })
  }

  findByEmail(email) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    })
  }

  create(user) {
    return prisma.user.create({
      data: user,
    })
  }

  delete(username) {
    return prisma.user.delete({
      where: {
        username,
      },
    })
  }

  update(username, user) {
    return prisma.user.update({
      where: {
        username,
      },
      data: user,
    })
  }
}

export default new UserRepository()
