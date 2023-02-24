module.exports.routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `<h1>Hai, ${name}!<h1>`;
      }

      return `<h1>Hello, ${name}!<h1>`;
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "Halaman About";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },

  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      let message;

      if (username === "@farhan" && password === "12345678") {
        message = `Hai, ${username} selamat datang kembali`;
      } else {
        message = `Username / password tidak terdaftar!`;
      }

      return message;
    },
  },
  {
    method: "*",
    path: "/{any}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];
