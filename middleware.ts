import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { NextResponse } from "next/server";

const { auth: middleware } = NextAuth(authConfig);

const publicRoutes = [
  "/",
  "/products",
  "/products/cocoa",
  "/products/coffe",
  "/products/panama-huts",
  "/products/tagua",
  "/products/vanilla",
  "/about-us",
  "/contact",
  "/our-story",
  "/our-team",
  "/favorite-cause",
  "/learning/advanced-topics",
  "/learning/make-vanilla-extract",
  "/learning/vanilla-bean-basics",
  "/learning/vanilla-glosary",
  "/learning",
  "/verify-email",
  "/learning/advanced-topics",
  "/reset-password",
  "/reset-password/verify-password",
  "/contact-us",
];
const authRoutes = ["/login", "/register"];
const apiAuthPrefix = "/api/auth";

export default middleware((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // Permitir todas las rutas de API de autenticación
  if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
    return NextResponse.next();
  }

  // Permitir acceso a rutas públicas sin importar el estado de autenticación
  if (publicRoutes.includes(nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Redirigir a /dashboard si el usuario está logueado y trata de acceder a rutas de autenticación
  if (isLoggedIn && authRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  // Redirigir a /login si el usuario no está logueado y trata de acceder a una ruta protegida
  if (
    !isLoggedIn &&
    !authRoutes.includes(nextUrl.pathname) &&
    !publicRoutes.includes(nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
