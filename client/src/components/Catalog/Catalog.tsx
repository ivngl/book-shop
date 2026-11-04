import { useEffect, useState } from "react"
import styles from "./Catalog.module.css"
import Burger from "../ui/Burger/Burger"

export function Catalog() {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8001").then(response => response.json()).then(data => {
      setData(data)
      setLoading(false)
    })
  })

  return (
    <>
      Catalog
			{loading ?? "Loading..."}
      <Burger/>
      <h1>{data}</h1>

      <div className={styles.catalog}>
        <div className={styles.catalog_item}></div>
      </div>
    </>
  )
}
