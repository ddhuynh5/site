import React from "react"
import Nav from "../_components/nav"
import Home from "../_components/home"

export async function generateMetadata() {
  return {
    title: "Dennis Huynh",
    description: "Learn more home Dennis!",
  }
}

const page = () => {
  return (
    <>
      <Nav />
      <Home />
    </>
  )
}

export default page