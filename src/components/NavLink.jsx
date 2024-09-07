function NavLink({ children, href }) {
  function scrollHandler(href) {
    const el = document.querySelector(`#${href}`);
    console.log(el);
    el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <li className="font-mono duration-300 cursor-pointer hover:bg-[#0ca678] hover:text-white rounded px-1">
      <button onClick={() => scrollHandler(href)}>{children}</button>
    </li>
  );
}

export default NavLink;
