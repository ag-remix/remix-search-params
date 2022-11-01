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
  const handleChange = (e) => e.target.form.submit();
  return /* @__PURE__ */ React.createElement("div", {
    className: "m-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold"
  }, "Welcome to Remix Starter!"), /* @__PURE__ */ React.createElement(Form, {
    method: "get",
    onChange: handleChange
  }, /* @__PURE__ */ React.createElement("span", null, "Sort by: "), /* @__PURE__ */ React.createElement("select", {
    name: "sortBy",
    defaultValue: sortBy,
    className: "border p-2 rounded"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "firstName"
  }, "First Name"), /* @__PURE__ */ React.createElement("option", {
    value: "lastName"
  }, "Last Name")), /* @__PURE__ */ React.createElement("button", {
    className: "ml-4 bg-blue-300 px-4 py-2 rounded"
  }, "Submit")), /* @__PURE__ */ React.createElement("table", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "bg-gray-200"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    className: "p-2"
  }, "First Name"), /* @__PURE__ */ React.createElement("th", {
    className: "p-2"
  }, "Last Name"))), /* @__PURE__ */ React.createElement("tbody", null, users.map((user) => /* @__PURE__ */ React.createElement("tr", {
    key: user.id,
    className: "even:bg-green-100"
  }, /* @__PURE__ */ React.createElement("td", {
    className: "p-2"
  }, user.firstName), /* @__PURE__ */ React.createElement("td", {
    className: "p-2"
  }, user.lastName))))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-GQD5T26Z.js.map
