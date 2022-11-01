var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/sandbox/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var import_nprogress = __toESM(require("nprogress"));

// node_modules/nprogress/nprogress.css
var nprogress_default = "/build/_assets/nprogress-JFUSETFZ.css";

// route:/sandbox/app/root.tsx
var import_react3 = require("react");
var links = () => {
  return [{ rel: "stylesheet", href: nprogress_default }];
};
var meta = () => ({
  charset: "utf-8",
  title: "Remix Search Params by Form",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let transition = (0, import_react2.useTransition)();
  (0, import_react3.useEffect)(() => {
    if (transition.state !== "idle") {
      import_nprogress.default.start();
    } else if (transition.state === "idle") {
      import_nprogress.default.done();
    }
  }, [transition.state]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null), /* @__PURE__ */ React.createElement("script", {
    src: "https://cdn.tailwindcss.com"
  })), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/sandbox/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_node = require("@remix-run/node");
var import_react4 = require("@remix-run/react");

// app/users.json
var users_default = [
  { id: 1, firstName: "Terry", lastName: "Medhurst" },
  { id: 2, firstName: "Sheldon", lastName: "Quigley" },
  { id: 3, firstName: "Terrill", lastName: "Hills" },
  { id: 4, firstName: "Miles", lastName: "Cummerata" },
  { id: 5, firstName: "Mavis", lastName: "Schultz" },
  { id: 6, firstName: "Alison", lastName: "Reichert" },
  { id: 7, firstName: "Oleta", lastName: "Abbott" },
  { id: 8, firstName: "Ewell", lastName: "Mueller" },
  { id: 9, firstName: "Demetrius", lastName: "Corkery" },
  { id: 10, firstName: "Eleanora", lastName: "Price" },
  { id: 11, firstName: "Marcel", lastName: "Jones" },
  { id: 12, firstName: "Assunta", lastName: "Rath" },
  { id: 13, firstName: "Trace", lastName: "Douglas" },
  { id: 14, firstName: "Enoch", lastName: "Lynch" },
  { id: 15, firstName: "Jeanne", lastName: "Halvorson" },
  { id: 16, firstName: "Trycia", lastName: "Fadel" },
  { id: 17, firstName: "Bradford", lastName: "Prohaska" },
  { id: 18, firstName: "Arely", lastName: "Skiles" },
  { id: 19, firstName: "Gust", lastName: "Purdy" },
  { id: 20, firstName: "Lenna", lastName: "Renner" },
  { id: 21, firstName: "Doyle", lastName: "Ernser" },
  { id: 22, firstName: "Tressa", lastName: "Weber" },
  { id: 23, firstName: "Felicity", lastName: "O'Reilly" },
  { id: 24, firstName: "Jocelyn", lastName: "Schuster" },
  { id: 25, firstName: "Edwina", lastName: "Ernser" },
  { id: 26, firstName: "Griffin", lastName: "Braun" },
  { id: 27, firstName: "Piper", lastName: "Schowalter" },
  { id: 28, firstName: "Kody", lastName: "Terry" },
  { id: 29, firstName: "Macy", lastName: "Greenfelder" },
  { id: 30, firstName: "Maurine", lastName: "Stracke" }
];

// route:/sandbox/app/routes/index.tsx
var loader = async ({ request }) => {
  const url = new URL(request.url);
  const sortBy = url.searchParams.get("sortBy") ?? "firstName";
  const sortedUsers = users_default.sort((a, b) => a[sortBy] < b[sortBy] ? -1 : 1);
  return (0, import_node.json)({ users: sortedUsers, sortBy });
};
function Index() {
  const { users, sortBy } = (0, import_react4.useLoaderData)();
  const submit = (0, import_react4.useSubmit)();
  const handleChange = (e) => submit(e.target.form);
  return /* @__PURE__ */ React.createElement("div", {
    className: "m-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold mb-4"
  }, "Welcome to Remix Search Params by Form"), /* @__PURE__ */ React.createElement(import_react4.Form, {
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
  }, "Last Name")), /* @__PURE__ */ React.createElement("noscript", null, /* @__PURE__ */ React.createElement("button", {
    className: "ml-4 bg-blue-300 px-4 py-2 rounded"
  }, "Submit"))), /* @__PURE__ */ React.createElement("table", {
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

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "4165f087", "entry": { "module": "/build/entry.client-2SXKGKKG.js", "imports": ["/build/_shared/chunk-E43AHNRD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-426CAVNO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-THB54QZB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-4165F087.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
