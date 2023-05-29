import React from 'react';
import NavbarMenuItem from "./NavbarMenuItem";

function NavbarMenuDropdownItem({ mainTitle, subMenuItems }:{mainTitle:string, subMenuItems:string[]}) {
  return (
    <li>
      <a>
        {mainTitle}
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>

      <ul className="bg-base-100 p-2">
        {subMenuItems.map((subMenuItem, index) => (
          <NavbarMenuItem title={subMenuItem} key={index} />
        ))}
      </ul>
    </li>
  );
}

export default NavbarMenuDropdownItem;
