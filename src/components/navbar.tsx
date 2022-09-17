import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  {
    /* Navbarのサイト名の変更は以下を変更してください。 */
  }
  const Navbar_Sitename = "Demo Site";
  const Navbar_Mobile_Sitename = "Demo";
  const hideToggle = () => {
    document.querySelector("#navbarNav")?.classList.remove("show");
    console.log("bootstrap Navbar collapse hide!!");
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand" onClick={hideToggle}>
            <Image
              src="/DemoLogo.svg"
              alt="demo logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
            <h1 className="fl-r blandname">{Navbar_Sitename}</h1>
            <h1 className="mt-3 blandname-mobile">{Navbar_Mobile_Sitename}</h1>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a onClick={hideToggle}>Home</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
