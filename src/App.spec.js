import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App.js Component", () => {
  test("should render heading", () => {
    render(<App />);
    const heading = screen.getByText("OTP INPUT");
    expect(heading).toBeInTheDocument();
  });

  test("should change boxes", async () => {
    userEvent.setup();
    render(<App />);
    const input = screen.getAllByRole("textbox");

    //await userEvent.click(input[0]);
    await userEvent.type(input[0], "1");
    await userEvent.type(input[1], "A");
    await userEvent.keyboard("{Backspace}");

    expect(input[0]).toBeInTheDocument();
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    expect(document.activeElement).toBe(input[0]);
  });
});
