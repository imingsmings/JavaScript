import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // console.log(123)
  // return NextResponse.next()
  // redirect('/')
  // return NextResponse.redirect(new URL('/posts', request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}
