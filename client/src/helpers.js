/* eslint-disable max-len */
const calendar = () => {
  // eslint-disable-next-line no-shadow
  const calendar = document.querySelector('#calendar');

  // eslint-disable-next-line no-plusplus
  for (let day = 1; day <= 7; day++) {
    const date = new Date(2021, 4, day);
    const options = { weekday: 'short' };
    const dayName = new Intl.DateTimeFormat('en-US', options).format(date);

    calendar.insertAdjacentHTML('beforeend', `<div class="day"><div class="name">${dayName}</div></div>`);
  }

  // testing logic for how to dynamically render a dogwalker's scheduled walks

  // const test = document.getElementsByClassName("day");
  // for (var j = 0; j < test.length; j++) {
  // if (test[j].innerText === "Sat") {
  //     test[j].insertAdjacentHTML("beforeend", `<div>2:00pm</div>`)
  // }
  // }

  /*
    iterate through each day of the week
      iterate through each appointment in the array of appointments per user
        if the inner text is equal to the day of the appontment
          // eslint-disable-next-line max-len
          insert adjacent HTML > a div with the {time} (div will have a click-handler to render modal with location, owner/walker name, dog name, duration of walk, and services)
    */
};

// eslint-disable-next-line import/prefer-default-export
export { calendar };
