import { useState } from "react"
export default function NavigatePages(){
  // const [currentPage, setCurrentPage] = useState(0)
  return(
        <section className="nav-pages">
          <button className="nav-btn">← Précédent</button>
          <span className="nav-indicator">0/1</span>
          <button className="nav-btn">Suivant →</button>   </section>
          
  )
}