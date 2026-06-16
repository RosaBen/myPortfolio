import {data, pages} from "./assets/scripts/data"
import Coverpage from "./components/Coverpage"
import NavigatePages from "./components/NavigatePages"
// import Home from "./components/Home"

import "./assets/styles/coverpage.css"
import "./assets/styles/home.css"

function App() {

const {name, avatar, role, bio, tags, email,website, websiteLabel} = data
  return (
    <>
        <main className="container">
      <div className="left body"></div>
       <div className="spine">
        <span className="spine-text">Portfolio · {name}</span>
       </div>
       <div className="body right">
        <Coverpage/>
       </div>
  {/* <Home
    name={name}
    avatar={avatar}
    title={role}
    bio={bio}
    tags={tags}
    email={email}
    website={website}
    websiteLabel={websiteLabel}
  /> */}
    </main>
    <NavigatePages/>
    </>
  )
}

export default App
