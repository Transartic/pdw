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
  id : 6,
  duration : "2 Hour",
  dateTime : "2021-06-03T16:00:00.000Z",
  comments : "Bad Dog",
  services : {
      dogMassage : "dogMassage",
      dogAcupuncture : "dogAccupuncture"
  },
  maxPrice : 30,
  status: true,
  assignedWalker: null,
  createdAt: "2021-05-26T15:23:54.124Z",
  updatedAt: "2021-05-26T15:23:54.124Z",
  userId: 1,
  bidId : null,
  user : {
      firstName : "John",
      dogname : null,
      address1 : "123 Main St."
  }
},
{
  id : 7,
  duration : "3 Hour",
  dateTime : "2021-07-13T18:00:00.000Z",
  comments : "Good Dog",
  services : {
      dogMassage : "dogMassage",
      dogAccupuncture: "dogAccupuncture"
  },
  maxPrice : 50,
  status : true,
  assignedWalker: null,
  createdAt : "2021-05-26T15:26:54.585Z",
  updatedAt : "2021-05-26T15:26:54.585Z",
  userId : 1,
  bidId : null,
  user : {
      firstName: "John",
      dogname : null,
      address1 : "123 Main St."
  }
}]

export {calendar, dummyData}
