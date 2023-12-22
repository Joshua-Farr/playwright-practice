import test, { expect } from "@playwright/test";

test("", async ({ page }) => {
  await page.goto(
    "https://www.Lambdatest.com/selenium-playground/simple-form-demo"
  );

  const messageInput = page.locator("input#user-message");
  await messageInput.scrollIntoViewIfNeeded();
  console.log(await messageInput.getAttribute("placeholder"));
  expect(messageInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message"
  );

  let input = await messageInput.inputValue();

  console.log("Before entering data: " + input);

  messageInput.type("HELLO THIS IS JOSH");

  input = await messageInput.inputValue();
  console.log("After entering data: ", input);
});
