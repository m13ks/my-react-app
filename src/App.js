import React from "react"
import Image from "./components/Image"
import ContactInfo from "./components/ContactInfo"
import Experience from "./components/Experience"
import "./App.css"

const Resume = () => {
  return (
    <div className="appbody">
      <div className="sideblock">
        <Image path="./img/m13ks.png" />
        <ContactInfo />
      </div>
      <Experience />
    </div>
  )
}

export default Resume
