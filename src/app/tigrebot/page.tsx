import { Fragment } from "react"
import WhatsappChannel from "../components/Tigrebot/WhatsappChannel"
import "./page.css"

const page = () => {
  return (
    <Fragment>
      <main className="flex place-content-center place-items-center h-screen">
        <WhatsappChannel />
      </main>
    </Fragment>
  )
}

export default page