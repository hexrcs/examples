objectType({
  name: "User",
  definition(t) {
    t.field("id", { type: "ID" });
    t.field("name", { type: "String" });
  }
});

objectType({
  name: "Query",
  definition(t) {
    t.list.field("users", {
      type: "User",
      resolve(_root, _args, _ctx) {
        return [{ id: "1649", name: "newton" }];
      }
    });
  }
});
