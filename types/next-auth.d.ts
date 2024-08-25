import { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      role?: string;
      emailVerified: Date | null;
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    role?: string;
    emailVerified: Date | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
    emailVerified: Date | null;
  }
}
