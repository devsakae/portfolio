import { Fragment } from "react"
import "./page.css"
import LastMessages from "../components/Tigrebot/LastMessages"

const page = () => {
  return (
    <Fragment>
      <main className="flex place-content-center place-items-center h-screen">
        <LastMessages />
      </main>
    </Fragment>
  )
}

export default page