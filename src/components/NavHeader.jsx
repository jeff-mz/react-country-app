import { IoMdMoon, IoMdSunny } from "react-icons/io";

function NavHeader({ darkMood, setDarkMood }) {
  return (
    <nav className="w-[100%] p-5 flex justify-between items-center bg-Light-Elements dark:bg-Dark-Elements sticky top-0 left-0 z-10">
      <h1 className="text-2xl md:text-3xl font-bold text-Dark-Text dark:text-Light-Text">
        Where in the world?
      </h1>
      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          setDarkMood(!darkMood);
        }}
      >
        {darkMood ? (
          <IoMdSunny className="text-2xl md:text-4xl" />
        ) : (
          <IoMdMoon className="text-2xl md:text-4xl" />
        )}
      </button>
    </nav>
  );
}

export default NavHeader;
