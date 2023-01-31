import { fireEvent, render, screen } from "@testing-library/react";
import UserPage from "../pages/user";

describe("User Page", () => {
  beforeEach(() => {
    render(<UserPage />);
  });

  it("start", () => {
    expect(screen.getByText("UserList")).toBeDefined();
  });

  it("add is clicked", () => {
    const button = screen.getByText(/Open/i);
    fireEvent.click(button);
    expect(screen.getByText("Add User")).toBeDefined();
  });
});
