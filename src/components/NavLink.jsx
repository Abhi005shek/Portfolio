function NavLink({ children, href }) {
  function scrollHandler(href) {
    const el = document.querySelector(`#${href}`);
    console.log(el);
    el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <li className="duration-300 cursor-pointer hover:text-[#0ca678]">
      <button onClick={() => scrollHandler(href)}>{children}</button>
    </li>
  );
}

export default NavLink;
