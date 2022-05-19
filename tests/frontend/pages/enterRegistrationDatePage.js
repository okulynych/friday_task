import { Selector, t } from "testcafe";

const monthYearOwnerRegisteredInput = Selector(
  '[name="monthYearOwnerRegistered"]'
);

export async function fillMonthYearOwnerRegisteredInput(registrationDate) {
  await t.typeText(monthYearOwnerRegisteredInput, registrationDate, {
    replace: true,
  });
}
