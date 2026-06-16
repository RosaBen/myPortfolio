export default function TableContents({ contents }) {
  const tableList = contents.map((item, i) => (
    <div key={i} className="contents-item">
      <span>{String(i + 1).padStart(2, "0")}</span>
      <div>
        <span>{item.label}</span>
        <span></span>
        <span>{`p.${item.page + 1}`}</span>
      </div>
    </div>
  ));
  return (
    <section className="table-contents">
      <h2>
        Sommaire <span></span>
      </h2>
      <div className="contents">{tableList}</div>
    </section>
  );
}
