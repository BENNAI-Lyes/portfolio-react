import { ListItemSecondaryAction } from "@material-ui/core";
import { useEffect, useState } from "react";
import PortfolioFeature from "../portfolioFeature/PortfolioFeature";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import PortfolioItem from "../portfolioItem/PortfolioItem";

export default function Portfolio() {
  const [active, setActive] = useState("featured");
  const [items, setItems] = useState(featuredPortfolio);

  const portfolioList = [
    { name: "featured" },
    { name: "web app" },
    { name: "mobile app" },
    { name: "Design" },
    { name: "Branding" },
  ];

  useEffect(() => {
    switch (active) {
      case "featured":
        setItems(featuredPortfolio);
        break;
      case "web app":
        setItems(webPortfolio);
        break;
      case "mobile app":
        setItems(mobilePortfolio);
        break;
      case "Design":
        setItems(designPortfolio);
        break;
      case "Branding":
        setItems(contentPortfolio);
        break;

      default:
        setItems(featuredPortfolio);
        break;
    }
  }, [active]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="wrapper">
        <h1>Portfolio</h1>
        <ul>
          {portfolioList.map((item) => (
            <PortfolioFeature
              name={item.name}
              key={item.name}
              setActive={setActive}
              active={active === item.name}
            />
          ))}
        </ul>
        <div className="container">
          {items.map((item) => (
            <PortfolioItem key={item.id} title={item.title} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
}
