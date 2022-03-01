import "./portfolioItem.scss";

export default function PortfolioItem({ title, img }) {
  return (
    <div className="item">
      <img src={img} alt="" />
      <span> {title} </span>
    </div>
  );
}
