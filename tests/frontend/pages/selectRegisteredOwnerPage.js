import { Selector, t } from "testcafe";

const registerOnYourNameYesRadioButton = Selector(
  '[data-testid*="shared.yes"]'
).find('input[id*="radio"]');

const registerOnYourNameNoRadioButton = Selector(
  '[data-testid*="shared.no"]'
).find('input[id*="radio"]');

const RegisteredOwnerUsedRadioButton = Selector(
  '[data-testid*="selectRegisteredOwner.used"]'
).find('input[id*="radio"]');

const RegisteredOwnerBrandNewRadioButton = Selector(
  '[data-testid*="selectRegisteredOwner.brandNew"]'
).find('input[id*="radio"]');

async function selectRegisterOnYourNameYesRadioButton() {
  await t.click(registerOnYourNameYesRadioButton);
}

async function selectRegisterOnYourNameNoRadioButton() {
  await t.click(registerOnYourNameNoRadioButton);
}

async function selectRegisteredOwnerUsedRadioButton() {
  await t.click(RegisteredOwnerUsedRadioButton);
}

async function selectRegisteredOwnerBrandNewRadioButton() {
  await t.click(RegisteredOwnerBrandNewRadioButton);
}

export async function setRegisterOnYourNameRadioButton(registeredOnYourName) {
  registeredOnYourName
    ? selectRegisterOnYourNameYesRadioButton()
    : selectRegisterOnYourNameNoRadioButton();
}

export async function setRegisterOwnerUsedOrNewRadioButton(usedWhenBuying) {
  usedWhenBuying
    ? selectRegisteredOwnerUsedRadioButton()
    : selectRegisteredOwnerBrandNewRadioButton();
}
