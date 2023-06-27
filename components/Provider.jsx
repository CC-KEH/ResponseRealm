'use client';
import { SessionProvider } from "next-auth/react";
const Provider = ({children,session}) => {
  return (
    //This is a higher order component
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
