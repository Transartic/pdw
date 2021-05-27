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


export {calendar}
