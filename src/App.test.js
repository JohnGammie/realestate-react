/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders search properties", () => {
  render(<App />);
  const linkElement = screen.getByText(/search properties/i);
  expect(linkElement).toBeInTheDocument();
});

test("Search buy", async () => {
  render(<App />);

  await fireEvent(
    screen.getByText("Search"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(await screen.findByText(/properties to buy/i)).toBeInTheDocument();
});

test("Search rent", async () => {
  render(<App />);

  await fireEvent(
    screen.getByText("Rent"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  await fireEvent(
    screen.getByText("Search"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(await screen.findByText(/properties to rent/i)).toBeInTheDocument();
});

test("Search sold", async () => {
  render(<App />);

  await fireEvent(
    screen.getByText("Sold"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  await fireEvent(
    screen.getByText("Search"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(await screen.findByText(/properties sold in/i)).toBeInTheDocument();
});

test("Can filter  property type: House", async () => {
  render(<App />);

  await fireEvent(
    screen.getByText("Buy"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  await fireEvent(
    screen.getByText("Filters"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  await fireEvent(
    screen.getByText("House"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  await fireEvent(
    screen.getByTestId("searchModal"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect((await screen.findAllByText(/House/i)).length).toBeGreaterThan(0);
  expect(screen.queryByText(/Apartment or Unit/i)).not.toBeInTheDocument();
});

test("Can change suburb", async () => {
  render(<App />);
  let suburbName = "South Yarra";

  await fireEvent(
    screen.getByText("Buy"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  await screen.findByRole("option", { name: suburbName });
  userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: suburbName })
  );
  expect(screen.getByRole("option", { name: suburbName }).selected).toBe(true);

  await fireEvent(
    screen.getByText("Search"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  await screen.findByText(/Properties to Buy in South Yarra/i);
});

test("Can filter properties with a price maximum", async () => {
  render(<App />);
  let priceMax = 300000;

  await fireEvent(
    screen.getByText("Buy"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  await fireEvent(
    screen.getByText("Filters"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  let priceMaxDropdown = screen.getByTestId("priceMax");
  userEvent.selectOptions(
    screen.getByTestId("priceMax"),
    screen.getByTestId("Max" + priceMax, { name: priceMax })
  );

  expect(priceMaxDropdown.value).toBe(`${priceMax}`);

  await fireEvent(
    screen.getByTestId("searchModal"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  // @TODO Need to find a way to extract prices on screen and then assert whether filter worked
});

test("Can sort properties by prices", async () => {
  render(<App />);

  await fireEvent(
    screen.getByText("Buy"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  await fireEvent(
    screen.getByText("Search"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  let str = "Price (Lowest - Highest)";
  userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: str })
  );
  expect(screen.getByRole("option", { name: str }).selected).toBe(true);

  // @TODO Need to find a way to extract prices on screen and then assert whether sorting worked
});
