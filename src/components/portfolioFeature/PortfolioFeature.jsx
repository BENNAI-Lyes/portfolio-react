import "./portfolioFeature.scss";

export default function PortfolioFeature({ name, active, setActive }) {
  return (
    <li
      className={active ? "active portfolioFeature " : "portfolioFeature"}
      onClick={() => setActive(name)}
    >
      {name}
    </li>
  );
}
