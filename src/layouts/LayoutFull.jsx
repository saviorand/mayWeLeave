import { Link } from "gatsby"
import React from "react"
import { Footer, SignupForm } from "../components"

export const LayoutFull = ({ children }) => {
  return (
    <>
      <header className="bg-white">
      </header>
      {children}
      <div className="bg-white py-8 lg:py-16 mt-8">
        <div className="container">
          <SignupForm />
        </div>
      </div>
      <Footer />
    </>
  )
}
