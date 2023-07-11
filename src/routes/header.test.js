// @vitest-environment jsdom

import { render, screen } from "@testing-library/svelte";
import { describe, test, expect } from 'vitest';
import Header from "./Header.svelte";

describe("Header", () => {

    test("shows the sign up text when rendered", () => {
        render(Header);

       

        const header = screen.getByRole("heading", { name: "Sign Up" });

        expect(header).exist;
    });
});