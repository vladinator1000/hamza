import { test, expect } from '@playwright/test'

test('signup', async ({ page }) => {
  await page.goto('/signup')

  await page.getByRole('textbox', { name: 'name' }).fill('John Doe')
  await page.getByRole('textbox', { name: 'email' }).fill('johndoe@example.com')
  await page
    .getByRole('textbox', { name: 'password' })
    .fill('Hamza2542345()*&%(*£$&')

  await page.getByRole('button', { name: 'Sign Up' }).click()

  let successMessage = page.getByText('Success!')
  await expect(successMessage).toBeVisible()
})
