import "../styles/SideNav.scss";

const SideNav = ({ menu,setMenu }) => {
  return (
    // <div className={`${menu ? "menu_open" : "menu_close"}`}>
    <div className={`${menu ? "sidenav_container" : "sidenav_close"}`}>
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
      <ul className={`sidenav_links ${menu && "menu_close"}`}>
        <li className="sidenav_link">Home</li>
        <li className="sidenav_link">Games</li>
        <li className="sidenav_link">About Us</li>
        <li className="sidenav_link">Tournaments</li>
        <li className="sidenav_link">Search</li>
      </ul>
      {/* <i className="bi bi-x-lg close" onClick={()=>setMenu(false)}></i> */}
    </div>
    // </div>
  );
};

export default SideNav;
