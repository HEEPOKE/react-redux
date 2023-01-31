import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../routes/AppRouter";
import App from "../main";

describe("App", () => {
  it("Start", () => {
    render(<AppRouter />);
    expect(
      screen.getByRole("navbar", {
        level: 1,
      })
    ).toHaveTextContent("Topic");
  });
  //   it('Renders not found if invalid path', () => {
  //     render(
  //       <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
  //         <AppRouter />
  //       </MemoryRouter>
  //     );
  //     expect(
  //       screen.getByRole('heading', {
  //         level: 1,
  //       })
  //     ).toHaveTextContent('Not Found');
  //   });
});
