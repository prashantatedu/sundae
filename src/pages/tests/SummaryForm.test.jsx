import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../summary/SummaryForm";
import userEvent from "@testing-library/user-event";

test("work with test", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkboxElement).not.toBeChecked();

  //
  const buttonElement = screen.getByRole("button", { name: /confirm order/i });
  expect(buttonElement).toBeDisabled();

  // Enabled
  await user.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeEnabled();

  // Disabled
  await user.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeDisabled();
});

test("popover responds to hover ", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  // popover start with hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();
  //popover appears on mouseover the checkbox
  const termsandconditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsandconditions);
  const withPopover = screen.getByText(
    /no ice cream will actually be delivered/i
  );
  expect(withPopover).toBeInTheDocument();
  //unhover the terms and conditions
  await user.unhover(termsandconditions);
  expect(withPopover).not.toBeInTheDocument();
});
