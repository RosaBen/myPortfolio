import avatar from "../assets/images/avatarRB.jpg";
export default function AboutMe({
  name,
  title,
  bio,
  tags,
  email,
  website,
  websiteLabel,
}) {
  const tagsList = tags.map((tag, i) => <span key={i}>{tag}</span>);
  return (
    <section className="home-page">
      <div className="circle-top"></div>
      <div className="avatar">
        <img src={avatar} alt={`avatar ${name}`} />
      </div>
      <h1>{title}</h1>
      <p>{name}</p>
      <div></div>
      <p>{bio}</p>
      <div className="tags">{tagsList}</div>
      <div>
        <a href={website} target="_blank" rel="noreferrer">
          🌐 {websiteLabel}
        </a>
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          ✉ Email
        </a>
      </div>
      <div className="circle-bottom"></div>
    </section>
  );
}
