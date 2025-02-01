import { useEffect } from "react"

function MyComponent() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div>{/* rest of component code */}</div>
}

export default MyComponent

