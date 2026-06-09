import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("見出しが表示される", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: "React Playground" })).toBeInTheDocument();
});

test("ボタンをクリックするとカウントが増える", async () => {
  const user = userEvent.setup();
  render(<App />);

  const button = screen.getByRole("button", { name: /count is 0/i });
  await user.click(button);

  expect(screen.getByRole("button", { name: /count is 1/i })).toBeInTheDocument();
});
