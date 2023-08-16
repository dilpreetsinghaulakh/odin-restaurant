function Contact() {
  const contact = document.createElement("div");
  contact.className = "flex flex-col gap-6";

  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  title.className = "text-5xl text-center font-serif";

  const email = document.createElement("p");
  email.textContent = "Email: lavahut@donotexist.com";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +00 1234567890";

  const timings = document.createElement("p");
  timings.innerHTML = "Mon - Fri : 8AM to 9PM <br />";
  timings.innerHTML += "Sat - Sun : 11AM to 11PM";

  const location = document.createElement("div");
  location.textContent = "Address:";
  const locationLine1 = document.createElement("p");
  locationLine1.textContent = "Street No. 1, Most Isolated Complex";
  const locationLine2 = document.createElement("p");
  locationLine2.textContent = "Bouvet Island, Norway -54.421174, 3.355788";

  location.append(locationLine1, locationLine2);

  const googleMap = document.createElement("div");
  googleMap.innerHTML = `<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bouvet%20Island+(My%20Business%20Name)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>`;

  contact.append(title, email, phone, timings, location, googleMap);

  return contact;
}

export default Contact;
