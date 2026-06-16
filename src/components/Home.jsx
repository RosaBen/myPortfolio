import avatar from "../assets/images/avatarRB.jpg"
export default function Home({name, title, bio, tags, email, website, websiteLabel}){

  const tagsList = tags.map((tag, i)=> (
    <span key={i}>tag</span>
  ))
  return(
    <>
    <div className="home-page right">
      <img src={avatar} alt={`avatar ${name}`}/>
          <h1>{title}</h1>
    <p>{name}</p>
    <hr />
    <p>{bio}</p>
    <div>
      {tagsList}
    </div>
    <div>
      <a href={website} target="_blank" rel="noreferrer">🌐 {websiteLabel}</a>
      <a href={`mailto:${email}`} target="_blank" rel="noreferrer">✉ Email</a>
    </div>
    </div>


    </>
  )
}

