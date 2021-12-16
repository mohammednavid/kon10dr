import "../styles/SideNav.scss";

const SideNav = () => {
  return (
    <div className="sidenav_container">
      <div className="sidenav">
        <div className="sidenav_top">
          <img src="/sidenav1.png" alt="" />
          <img src="/sidenav1.png" alt="" />
          <img src="/sidenav1.png" alt="" />
          <img src="/sidenav1.png" alt="" />
          <img src="/sidenav1.png" alt="" />
          <img src="/sidenav1.png" alt="" />
          <i className="bi bi-plus"></i>
        </div>
        <div className="sidenav_bottom">
          <img src="/sidenav2.png" alt="" />
          <img src="/sidenav2.png" alt="" />
          <img src="/sidenav2.png" alt="" />
          <img src="/sidenav2.png" alt="" />
          <img src="/sidenav2.png" alt="" />
          <img src="/sidenav2.png" alt="" />
          <i className="bi bi-plus"></i>
        </div>
      </div>
      <ul className="sidenav_links">
        <li className="sidenav_link">Home</li>
        <li className="sidenav_link">Games</li>
        <li className="sidenav_link">About Us</li>
        <li className="sidenav_link">Tournaments</li>
        <li className="sidenav_link">Search</li>
      </ul>
    </div>
  );
};

export default SideNav;
