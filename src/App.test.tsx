import App from "./App";
import { render, waitFor } from "./testUtils";

function setupTest() {
  const { getByText } = render(<App />);
  return { getByText };
}

test("should render the header", async () => {
  const { getByText } = setupTest();

  await waitFor(() => {
    expect(getByText("Updraft Todos")).toBeInTheDocument();
  });
});
