/* eslint-disable testing-library/no-container */
import { render } from "../../testUtils";
import Names, { people } from "./Names";

function setupTest() {
  const { container, getByText } = render(<Names />);
  return { container, getByText };
}

test("should render the names", async () => {
  const { container } = setupTest();

  expect(container.getElementsByClassName("names")[0].children).toHaveLength(
    people.length
  );
});

test("should be correctly formatted", async () => {
  const { getByText } = setupTest();
  expect(getByText("Peter is 20 years old.")).toBeInTheDocument();
});
