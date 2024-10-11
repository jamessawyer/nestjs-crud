import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of Prisma Client.',
      description:
        'MongoDB support is one of the most requested features since the initial release of the client. It allows us to connect our application to a MongoDB database using the new query builder.',
      published: false,
    },
  })

  const post2 = await prisma.article.upsert({
    where: { title: 'What is Prisma?' },
    update: {},
    create: {
      title: 'What is Prisma?',
      body: 'Prisma is a free and open-source database toolkit that provides everything you need to start using databases with Node.js, JavaScript, and TypeScript.',
      description:
        'Prisma is a free and open-source database toolkit that provides everything you need to start using databases with Node.js, JavaScript, and TypeScript.',
      published: true,
    },
  })

  console.log({ post1, post2 })
}

main()
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
