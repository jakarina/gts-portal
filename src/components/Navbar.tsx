import NavbarMenuDropdownItem from "./NavbarMenuDropdownItem";
import NavbarMenuItem from "./NavbarMenuItem";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-0">
          <a className="btn-ghost btn text-xl normal-case" href="https://www.gtselevator.com/">GTS Asansör Portal</a>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal px-1">
            <NavbarMenuItem title="Ana Sayfa" />
            <NavbarMenuDropdownItem mainTitle="Projeler" subMenuItems={["Tesisat Listesi", "Bakım Listesi"]}/>
            <NavbarMenuItem title="Satış" />
            <NavbarMenuItem title="Depo Yönetim" />  
          </ul>
        </div>
        <UserMenu />
      </div>
    </>
  );
}

export default Navbar;
