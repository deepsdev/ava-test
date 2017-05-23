
import test from "ava";
import {fixture} from "../index";

test.beforeEach('setup fixture', fixture("./test/test.html"));

test("h1 content", t => {
  t.is(t.context.document.documentElement.querySelector("h1").textContent, "Hello Test");
});
test("Checks anchor link", t => {
  t.is(t.context.document.documentElement.querySelector(".google-link").href, "https://www.google.com/");
});