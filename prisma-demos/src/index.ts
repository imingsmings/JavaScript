import { PrismaClient } from '@prisma/client'
import { log } from 'node:console'

const primsa = new PrismaClient()

async function main() {
  // await createMovie()
  // await getAllMovies()
  // await getMovieById(1)
  // await updateMovie(1, {
  //   title: 'uuuuuuuu'
  // })
  await deleteMovie(1)
}

main()
  .then(async () => {
    return await primsa.$disconnect()
  })
  .catch(async () => {
    await primsa.$disconnect()
    process.exit(1)
  })

async function createMovie() {
  // primsa.movie.createMany([ {} ])
  const newMovie = await primsa.movie.create({
    data: {
      title: 'Apple Original  111',
      description: 'A good movie',
      genre: 'Sci-Fi',
      releaseDate: new Date('2025-01-02'),
      rating: 8.8
    }
  })

  log(newMovie)
}

async function getAllMovies() {
  const movies = await primsa.movie.findMany()
  log(movies)
}

async function getMovieById(id: number) {
  const movie = await primsa.movie.findMany({
    where: {
      id
    }
  })

  log(movie)
}

async function updateMovie(id: number, data: object) {
  const updatedMovie = await primsa.movie.update({
    where: {
      id: id
    },
    data: data
  })

  log(updatedMovie)
}

async function deleteMovie(id: number) {
  const movie = await primsa.movie.delete({
    where: {
      id
    }
  })

  log(movie)
}
