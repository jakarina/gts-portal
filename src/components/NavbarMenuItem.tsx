type Props = {
  title: string;};

function NavbarMenuItem({ title } : Props) {
  return (
    <li>
      <a>{ title }</a>
    </li>
  );
}

export default NavbarMenuItem;
