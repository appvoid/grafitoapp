console.clear();
const root = document.getElementById("root");
const wrapper = document.getElementById("wrapper");
const darkModeSwitch = document.getElementById("darkModeSwitch");

const toggleDarkMode = () => {
  root.className = darkModeSwitch.checked == true ? "dark" : "light";
  wrapper.className = root.className;
};

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});