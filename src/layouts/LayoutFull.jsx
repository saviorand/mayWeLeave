import { Link } from "gatsby"
import React from "react"
import { Footer, SignupForm } from "../components"

export const LayoutFull = ({ children }) => {
  return (
    <div className="container bg-white">
      {children}
      <div className="bg-white py-8 lg:py-16 mt-8">
        <div className="container">
          <SignupForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
