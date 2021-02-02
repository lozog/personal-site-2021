import "./styles.scss";

export default function Overlay({
  text,
  children
}) {
  return (
    <div className="Overlay" key={text}>
      {children}
      <div className="Overlay__overlay">
        <div className="Overlay__overlay-text">{text}</div>
      </div>
    </div>
  );
}