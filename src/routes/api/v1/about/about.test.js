import { $fetch, setup } from 'vite-test-utils'
import { describe, expect, test } from 'vitest'
// Trick so vitest knows to re-run the tests below when +server.ts changes:
import './+server'
await setup({
  server: true,
})
describe('GET /api/todos', () => {
  test('responds with the list of todos', async () => {
    const todos = await $fetch('/api/v1/about')
    expect(todos).toEqual("hello")
  })
})