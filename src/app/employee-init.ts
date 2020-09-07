export class Init {
  load() {
    console.log("kkkk");
    if (
      localStorage.getItem("employees") === null ||
      localStorage.getItem("employees") == undefined
    ) {
      console.log("No employees Found... Creating...");
      let employees = [
        {
          id: 1,
          firstName: "Kiran",
          lastName: "Kumar",
          guest: "3",
          checkIn: "3:14PM",
        },
        {
          id: 2,
          firstName: "Kiran",
          lastName: "Kumar",
          guest: "3",
          checkIn: "3:14PM",
        },
        {
          id: 3,
          firstName: "Kiran",
          lastName: "Kumar",
          guest: "3",
          checkIn: "3:14PM",
        },
        {
          id: 4,
          firstName: "Kiran",
          lastName: "Kumar",
          guest: "3",
          checkIn: "3:14PM",
        },
      ];

      localStorage.setItem("employees", JSON.stringify(employees));
      return;
    } else {
      console.log("Found employees...");
    }
  }
}
