import { render } from "../../testUtils";
import Names from "./Names";

function setupTest() {
  const { getByText } = render(<Names />);
  return { getByText };
}

test("should render the names", async () => {
  const { getByText } = setupTest();

  expect(getByText("Peter is 20 years old")).toBeInTheDocument();
  expect(getByText("James is 25 years old")).toBeInTheDocument();
});
