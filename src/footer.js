function Footer() {
  const footer = document.createElement("footer");
  footer.className =
    "w-full bg-slate-300 mt-6 py-4 dark:bg-slate-900 dark:text-white flex flex-col items-center gap-2";

  const notReal = document.createElement("p");
  notReal.textContent = "THIS IS NOT A WEBSITE FOR A REAL PLACE";
  notReal.className = "text-red-500 font-bold";

  const info = document.createElement("p");
  info.innerHTML = `A project page from <a href="https://www.theodinproject.com/" class="text-blue-900 dark:text-blue-400">The Odin Project</a>.`;

  const github = document.createElement("a");
  github.href = "https://github.com/dilpreetsinghaulakh/odin-restaurant";
  github.target = "blank";
  github.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> Github`;
  github.className = "flex gap-2";

  const copyright = document.createElement("p");
  copyright.textContent = "©2023 Dilpreet Singh";

  footer.append(notReal, info, github, copyright);

  return footer;
}

export default Footer;
