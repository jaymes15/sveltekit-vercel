// @vitest-environment jsdom

import { render, screen } from "@testing-library/svelte";
import { describe, test, expect } from 'vitest';
import Page from "./+page.svelte";

describe("Page", () => {

    test("shows the sign up text when rendered", () => {
        render(Page);

       

        const header = screen.getByRole("heading", { name: "Welcome to SvelteKit" });

        expect(header).exist;
    });
});