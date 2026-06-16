import { data, pages, tableContents } from "./assets/scripts/data";
import Coverpage from "./components/Coverpage";
import NavigatePages from "./components/NavigatePages";
import AboutMe from "./components/AboutMe";
import TableContents from "./components/TableContents";
import Resume from "./components/Resume";

import "./assets/styles/coverpage.css";
import "./assets/styles/aboutme.css";
import "./assets/styles/tablecontents.css";
import "./assets/styles/resume.css";

function App() {
  const { name, avatar, role, bio, tags, email, website, websiteLabel } = data;
  return (
    <>
      <main className="container">
        <div className="page-left body">
          <AboutMe
            name={name}
            avatar={avatar}
            title={role}
            bio={bio}
            tags={tags}
            email={email}
            website={website}
            websiteLabel={websiteLabel}
          />
        </div>
        <div className="page-spine">
          <span className="spine-text">Portfolio · {name}</span>
        </div>
        <div className="body page-right">
          {/* <Coverpage /> */}
          <TableContents contents={tableContents} />
        </div>
      </main>
      <NavigatePages />
    </>
  );
}

export default App;
