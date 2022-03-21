/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AgentCard from "./AgentCard";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders agnent name and contact", () => {
  let agent = { name: "Bob", phoneNumber: "666333222" };
  render(<AgentCard agent={agent} />);

  const nameElement = screen.getByText(/Bob/i);
  const phoneNumberElement = screen.getByText(/666333222/i);

  expect(nameElement).toBeInTheDocument();
  expect(phoneNumberElement).toBeInTheDocument();
});
