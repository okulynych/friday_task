import { Selector, t } from "testcafe";

const submitButton = Selector("button[type=submit]");

export async function clickSubmitButton() {
  await t.click(submitButton);
}
