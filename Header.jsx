import chefClaudeLogo from "./images/chef-claude-icon.png";
import { FaCocktail } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      {/* <img src={chefClaudeLogo} /> */}
      <FaCocktail size={40} />
      <h1>Bartender Claude</h1>
    </header>
  );
}
