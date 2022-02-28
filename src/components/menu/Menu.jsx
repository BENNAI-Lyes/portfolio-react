import "./menu.scss";
import MenuItem from "../menuItem/MenuItem";

export default function Menu({ isTopbarActive, setIsTopbarActive }) {
  const menuLists = [
    { id: 1, name: "home" },
    { id: 2, name: "portfolio" },
    { id: 3, name: "works" },
    { id: 4, name: "testimonials" },
    { id: 5, name: "contact" },
  ];
  return (
    <div className={isTopbarActive ? "active menu" : "menu"}>
      <ul>
        {menuLists.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            isTopbarActive={isTopbarActive}
            setIsTopbarActive={setIsTopbarActive}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
