import "./menuItem.scss";

export default function MenuItem({
  name,
  isTopbarActive,
  setIsTopbarActive,
  id,
}) {
  return (
    <li>
      <a
        href={id === 1 ? "#intro" : `#${name}`}
        onClick={() => setIsTopbarActive(false)}
      >
        {name}
      </a>
    </li>
  );
}
