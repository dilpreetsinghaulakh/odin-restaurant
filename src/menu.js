function Menu() {
  const menu = document.createElement("div");

  const makePizzaList = (array) => {
    const pizzaList = document.createElement("div");
    pizzaList.className =
      "bg-slate-100 dark:bg-slate-900 rounded-xl p-6 flex flex-col gap-6";
    for (let i = 0; i < array.length; i++) {
      const item = document.createElement("span");
      const name = document.createElement("p");
      const price = document.createElement("p");

      name.textContent = array[i].name;
      price.textContent = `$${array[i].price}`;

      item.append(name, price);
      item.className = "flex w-full justify-between gap-2";

      pizzaList.append(item);
      menu.append(pizzaList);
    }
  };

  const regularPizzas = [
    { name: "Awesome American Cheesy", price: 5.99 },
    { name: "Mexican Fiesta", price: 6.99 },
    { name: "Margherita", price: 4.99 },
    { name: "Schezwan Margherita", price: 5.99 },
    { name: "Cron and Cheese", price: 5.99 },
    { name: "Indian Tandoori Panner", price: 7.99 },
    { name: "Veggie Supreme", price: 6.99 },
    { name: "Ultimate Mix", price: 7.99 },
    { name: "Cheese Mushroom", price: 5.99 },
  ];

  const pizzaTitleStyle = "font-serif text-3xl text-center my-4";

  const regularPizzaTitle = document.createElement("h1");
  regularPizzaTitle.textContent = "Regular Pizzas";
  regularPizzaTitle.className = pizzaTitleStyle;
  menu.append(regularPizzaTitle);

  makePizzaList(regularPizzas);

  const premiumPizzasTitle = document.createElement("h1");
  premiumPizzasTitle.textContent = "Extraordinary Premium Pizzas";
  premiumPizzasTitle.className = pizzaTitleStyle;
  menu.append(premiumPizzasTitle);

  const premiumPizzas = [
    { name: "Veg Exotica", price: 9.99 },
    { name: "San Francisco Style", price: 12.99 },
    { name: "The Spicey Mix", price: 15.99 },
    { name: "Exotic Mushroom", price: 13.99 },
  ];

  makePizzaList(premiumPizzas);

  const classicPizzasTitle = document.createElement("h1");
  classicPizzasTitle.textContent = "Classic Pizzas";
  classicPizzasTitle.className = pizzaTitleStyle;
  menu.append(classicPizzasTitle);

  const classicPizzas = [
    { name: "Only Cheese", price: 2.59 },
    { name: "Italian Onion Tomato", price: 4.59 },
    { name: "Classic Corn", price: 3.59 },
    { name: "Classic Onion Capsicum", price: 3.59 },
  ]

  makePizzaList(classicPizzas)

  return menu;
}

export default Menu;
