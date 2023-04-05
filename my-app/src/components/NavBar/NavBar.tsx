import "../../components/NavBar/NavBar.css";

export default function Footer() {
  return (
   <header className="nav">
    <nav>
      <ul className="nav-items">
        <li><a href="/">Home</a></li>
        <li>Shop</li>
        <li><a href="favorites">My Favorites</a></li>
      </ul>
    </nav>
   </header>
  );
}