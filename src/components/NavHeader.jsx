import { useEffect } from "react";
import { IoMdMoon } from "react-icons/io";

function NavHeader({ darkMood, setDarkMood }) {
  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    // If no theme is saved, default to light (darkMood = false)
    if (savedTheme === null) {
      localStorage.setItem("theme", "light"); // Default to light theme
      setDarkMood(false); // Set darkMood to false
    } else {
      // If a theme is saved, use it
      setDarkMood(savedTheme === "dark");
      document.body.classList.toggle("dark", savedTheme === "dark");
    }
  }, [setDarkMood]);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newDarkMood = !darkMood; // Toggle the state
    setDarkMood(newDarkMood); // Update state
    document.body.classList.toggle("dark", newDarkMood); // Toggle dark class
    localStorage.setItem("theme", newDarkMood ? "dark" : "light"); // Save to localStorage
  };

  return (
    <nav className="w-full p-5 bg-Light-Elements dark:bg-Dark-Elements sticky top-0 left-0 z-10">
      <div className="w-full md:container mx-auto flex justify-between items-center">
        <h1 className="text-[20px] md:text-3xl font-bold text-Dark-Text dark:text-Light-Text">
          Where in the world?
        </h1>
        <button onClick={toggleTheme}>
          <span
            className={`${
              darkMood ? "text-Light-Elements" : "text-Dark-Elements"
            } flex items-end justify-between w-[110px] md:w-[150px] h-[30px] font-bold`}
          >
            <IoMdMoon className="text-2xl md:text-4xl mb-1 md:mb-[2px]" />
            <span className="text-1xl md:text-[20px]"> Dark Mode</span>
          </span>
        </button>
      </div>
    </nav>
  );
}

export default NavHeader;
