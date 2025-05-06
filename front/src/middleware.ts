import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const {pathname, origin} = request.nextUrl;

  if(pathname === "/dashboard" || pathname === "/cart" && !request.cookies.get("userSession")?.value) {
    const loginUrl = new NextURL("/login", origin)
    return NextResponse.redirect(loginUrl);
  } else{
    NextResponse.next();
  }
}
