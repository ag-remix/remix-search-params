import {
  Form,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-NPUEIMHS.js";

// browser-route-module:/sandbox/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function Index() {
  const { users, sortBy } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold"
  }, "Welcome to Remix Starter!"), /* @__PURE__ */ React.createElement(Form, {
    method: "get"
  }, /* @__PURE__ */ React.createElement("select", {
    name: "sortBy",
    value: sortBy
  }, /* @__PURE__ */ React.createElement("option", {
    value: "firstName"
  }, "First Name"), /* @__PURE__ */ React.createElement("option", {
    value: "lastName"
  }, "Last Name")), /* @__PURE__ */ React.createElement("noscript", null, /* @__PURE__ */ React.createElement("button", null, "Submit"))), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "First Name"), /* @__PURE__ */ React.createElement("th", null, "Last Name"))), /* @__PURE__ */ React.createElement("tbody", null, users.map((user) => /* @__PURE__ */ React.createElement("tr", {
    key: user.id
  }, /* @__PURE__ */ React.createElement("td", null, user.firstName), /* @__PURE__ */ React.createElement("td", null, user.lastName))))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-FT3URA6Z.js.map
