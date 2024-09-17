// App.test.js
// Import necessary dependencies for testing the App component
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import store from "./store/store";

// Describe the test suite for the App component
describe("App component", () => {
  // Test that the App component renders the "This is Login page" heading
  it('renders "This is Login page" heading', () => {
    // Render the App component with the Redux store
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // Expect the heading to be present in the document
    expect(
      screen.getByRole("heading", { name: "This is Login page" })
    ).toBeInTheDocument();
  });
  // Test that the App component renders the Login component
  it("renders the Login component", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // Wait for the Login component to be rendered
    await waitFor(() => {
      // Expect the Login component to be present in the document
      expect(screen.getByRole("login")).toBeInTheDocument();
    });
  });

  // Test that the App component does not render anything else besides the heading and Login component
  it("does not render anything else besides the heading and Login component", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // Wait for the components to be rendered
    await waitFor(() => {
      // Get all headings and Login components
      const headings = screen.getAllByRole("heading");
      const loginComponents = screen.getAllByRole("login");
      // Expect only two components to be present (heading and Login component)
      expect([...headings, ...loginComponents]).toHaveLength(2);
    });
  });
});