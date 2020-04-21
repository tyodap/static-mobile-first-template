const users = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "assets/img/u1.jpg"
  },
  {
    id: 2,
    email: "janet.weaver.charles.bong.holt.eve.william.mayer@reqres.in",
    first_name: "Janet",
    last_name: "Weaver Charles Bong Holt Eve William Mayer",
    avatar: "assets/img/u2.jpg"
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "assets/img/u3.jpg"
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "assets/img/u4.jpg"
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "assets/img/u5.jpg"
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "assets/img/u6.jpg"
  },
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "assets/img/u7.jpg"
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "assets/img/u8.jpg"
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "assets/img/u9.jpg"
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "assets/img/u10.jpg"
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "assets/img/u11.jpg"
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "assets/img/u12.jpg"
  }
];

const container = document.querySelector(".user__container");

function renderUser() {
  users.map(user => {
    const list = document.createElement("li");
    list.className = "user__card";
    list.innerHTML = `
      <img
        src="${user.avatar}"
        alt="${user.first_name} ${user.last_name}">
      <div class="user__card-body">
        <div class="user__name font-larger">
        ${user.first_name} ${user.last_name}
        </div>
        <a class="user__email" href="mailto:${user.email}">
        ${user.email}
        </a>
      </div>`;
    return container.appendChild(list);
  });
}

renderUser();
