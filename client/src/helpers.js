const calendar = () => {
  const calendar = document.querySelector("#calendar");

  for (let day = 0; day <=6; day++) {
    var date = new Date();

    date.setDate(date.getDate() + day);

    const options = { weekday: "short" };
    const dayName = new Intl.DateTimeFormat("en-US", options).format(date);

    calendar.insertAdjacentHTML("beforeend", `<div class="day"><div class="name">${dayName}</div></div>`);
  }

};

var dummyData = [{
  duration: 60,
  dateTime: "2021-05-26T12:15:50.283Z",
  maxPrice: 30,
  comments: "stuff stuff stuff",
  services: {
    acupuncture: true,
    spa: true,
    dental: false
  },
  ownerName: "billy",
  dogName: "greg",
  ownerAddress: "123 main st, LA 90210"
}, {
  duration: 60,
  dateTime: "2021-05-27T18:15:50.283Z",
  maxPrice: 30,
  comments: "stuff stuff stuff",
  services: {
    acupuncture: false,
    spa: true,
    dental: false
  },
  ownerName: "billy",
  dogName: "greg",
  ownerAddress: "123 main st, LA 90210"
}]

export {calendar, dummyData}
