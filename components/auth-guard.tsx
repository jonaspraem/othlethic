import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface IAuthGuard {
    children?: any;
}

const AuthGuard = ({ children }: IAuthGuard) => {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const sesh = useSession();
    const router = useRouter();

    if (sesh.status === "loading") return <>loading...</>
    if (sesh.status === "unauthenticated" && router.pathname !== "/signin") router.replace('/signin');

    return children
  }

export default AuthGuard;