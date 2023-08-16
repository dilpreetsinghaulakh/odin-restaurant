import heroImage from "./assets/top-view-pizza-home.png";

function Home() {
  const homePage = document.createElement("div");
  const heroSection = document.createElement("div");
  heroSection.className = "flex gap-8 h-[80vh] flex-col mt-8 md:mt-0 md:flex-row";

  const heroLeft = document.createElement("div");

  const heroHeading = document.createElement("h1");
  heroHeading.textContent = "Experience the ultimate Cuisine";
  heroHeading.className = "text-6xl font-serif";

  const heroParagraph = document.createElement("p");
  heroParagraph.textContent =
    "The Tastiest & Best Pizza In The World. Have the real uniquely crafted experience.";
  heroParagraph.className = "text-lg"

  const heroBtn = document.createElement("button");
  heroBtn.textContent = "View Menu";
  heroBtn.onclick = () => {
    console.log("Hero button clicked");
  };
  heroBtn.className =
    "w-fit bg-orange-500 text-white px-16 py-4 rounded-full font-bold shadow-xl shadow-orange-500/40 dark:shadow-orange-500/30";

  heroLeft.className = "flex flex-col justify-center gap-8 items-center md:items-start md:w-1/2";
  heroLeft.append(heroHeading, heroParagraph, heroBtn);

  const heroRight = document.createElement("div");
  heroRight.className = "flex flex-col justify-center items-center";

  const heroImgContainer = document.createElement("div");
  heroImgContainer.className = "aspect-square max-h-full";

  const heroImg = new Image();
  heroImg.src = heroImage;
  heroImg.className = " filter drop-shadow-xl-dark";

  heroImgContainer.append(heroImg);

  heroRight.append(heroImgContainer);

  heroSection.append(heroLeft, heroRight);

  homePage.appendChild(heroSection);

  return homePage;
}

export default Home;
