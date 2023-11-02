import React from "react"
import Nav from "../_components/nav"
import Body from "../_components/body"

export async function generateMetadata() {
  return {
    title: "Dennis Huynh",
    description: "Learn more Body Dennis!",
  }
}

const page = () => {
  return (
    <>
      <Nav />
      <Body />
    </>
  )
}

export default page