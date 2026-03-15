import copy = require("object-copy");

// Basic usage
const result = copy({ a: 1 }, { b: 2 });

// With omit string
copy({ a: 1 }, { b: 2, c: 3 }, "c");

// With omit array
copy({ a: 1 }, { b: 2, c: 3, d: 4 }, ["c", "d"]);

// With filter function
copy({ a: 1 }, { b: 2, c: 3 }, undefined, (key) => key !== "c");

// has helper
const hasKey: boolean = copy.has({ a: 1 }, "a");

// @ts-expect-error - receiver must be an object
copy("not an object", { b: 2 });
