const data = [
  {
    name: "jhbnkmfs",
  },
  {
    name: "fcygvhbjknl",
  },
];

localStorage.setItem("data", JSON.stringify(data));

console.log(JSON.parse(localStorage.getItem("data"))[0]);
