import Link from "next/link";

const Header = () => (
  <header>
    <nav className={`navigation-menu`}>
      <ul>
        <li>
          {" "}
          <Link href="/">
            <a className="navigation-link">Home</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/about">
            <a className="navigation-link">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
