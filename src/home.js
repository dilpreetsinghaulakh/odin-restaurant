import heroImage from "./assets/top-view-pizza-home.png"

function Home() {
  const homePage = document.createElement("div");
  const heroSection = document.createElement("div");
  heroSection.className = "flex";

  const heroLeft = document.createElement("div");

  const heroHeading = document.createElement("h1");
  heroHeading.textContent = "Experience the ultimate Cuisine";
  heroHeading.className = "text-6xl font-serif"

  const heroParagraph = document.createElement("p");
  heroParagraph.textContent =
    "The Tastiest & Best Pizza In The World. Have the real uniquely crafted experience.";

  const heroBtn = document.createElement("button");
  heroBtn.textContent = "View Menu";
  heroBtn.onclick = () => {
    console.log("Hero button clicked");
  };

  heroLeft.className = "flex flex-col justify-center gap-4"
  heroLeft.append(heroHeading, heroParagraph, heroBtn);

  const heroRight = document.createElement("div");

  const heroImg = new Image();
  heroImg.src = heroImage;
  

  const heroImgAfter = document.createElement("div")
  heroImgAfter.className = "h-[100px] w-[250px] absolute bg-blue-400"

  heroRight.append(heroImg, heroImgAfter);

  heroSection.append(heroLeft, heroRight);

  homePage.appendChild(heroSection);

  return homePage;
}

export default Home;
