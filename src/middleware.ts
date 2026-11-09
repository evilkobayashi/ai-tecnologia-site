import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const code = searchParams.get('code')

  // Se o OAuth do Supabase redirecionar o usuário para o domínio institucional (aitecnologia.xyz) com ?code=,
  // encaminha para o callback do Redação Nota 10 AÍ para autenticação e redirecionamento para a dashboard
  if (code && (pathname === '/' || pathname === '/auth/callback')) {
    const targetUrl = new URL('https://redacao.aitecnologia.xyz/auth/callback')
    targetUrl.search = request.nextUrl.search
    if (!targetUrl.searchParams.has('next')) {
      targetUrl.searchParams.set('next', '/dashboard')
    }
    return NextResponse.redirect(targetUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
