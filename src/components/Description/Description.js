import "./Description.css";

function Description(props) {
  return (
    <section className="description">
      <h2 className="description__title">{props.title}</h2>
      {props.children}
    </section>
  );
}

export default Description;