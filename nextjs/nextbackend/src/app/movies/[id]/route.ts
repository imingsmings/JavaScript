import { movies } from '../db'

interface Args {
  params: Promise<{ id: string }>
}

export async function GET(_req: Request, { params }: Args): Promise<Response> {
  const { id } = await params
  const movie = movies.find((m) => m.id === +id)

  if (!movie) {
    return new Response('The movie is not found', { status: 404 })
  }

  return Response.json(movie)
}

export async function PATCH(req: Request, { params }: Args): Promise<Response> {
  const { id } = await params
  const movieId = +id

  const index = movies.findIndex((m) => m.id === movieId)

  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Movie Not Found :(' }), {
      status: 404
    })
  }

  try {
    const updatedMovie = await req.json()
    movies[index] = { ...movies[index], ...updatedMovie }
    return new Response(JSON.stringify(movies[index]), { status: 200 })
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to parse JSON' }), { status: 404 })
  }
}
