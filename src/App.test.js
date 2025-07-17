import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import React from "react";

describe("App Component", () => {});

test("Check photo in script", () => {
  render(<App />);

  const Img = screen.findAllByRole("img", {
    name: /fotogatinha/i,
  });
  expect(Img).toBeTruthy();
});

test("Check if have buttons in script", async () => {
  render(<App />);

  // const Buttons = ["link 1", "link 2", "link 3", "link 4"];

  const Buttons = await screen.findAllByRole("button");
  expect(Buttons).toHaveLength(4);
  console.log(screen.debug());
});

test("Check if have social icons in script", async () => {
  render(<App />);
  const Icons = await screen.findAllByRole("img", {
    name: /rocket/i,
  });
  expect(Icons).toHaveLength(5);
});

test.only("Check if have social name in script", async () => {
  render(<App />);

  // const socialName = await screen.findAllByRole("p", {
  //   name: /socialname/i,
  // });

  const socialName = await screen.findByText(/@rackelrodrigues/i);

  expect(socialName).toBeInTheDocument();
});
