import { NextRequest } from 'next/server'
import { movies } from './db'

// export async function GET(): Promise<Response> {
//   return Response.json(movies)
// }

export async function POST(req: Request): Promise<Response> {
  let movie = await req.json()

  const newMovie = { ...movie }

  movies.push(newMovie)
  return new Response(JSON.stringify(newMovie))
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  if (query) {
    const data = movies.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))
    return Response.json(data)
  }

  return Response.json(movies)
}
