import { type FC } from "react"

type AppProps = {
  children: React.ReactNode
}

export const Layout:FC<AppProps> = ({children}) =>{
  return(
    <div className="flex flex-col w-full h-[100vh] bg-[#1f2937]">
      {children}
    </div>
  )
}
