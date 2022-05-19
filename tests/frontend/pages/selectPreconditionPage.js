import { Selector, t } from "testcafe";
import { selectPreconditionPageUrl } from "../../../utils/constants";
import { getCurrentPageUrl } from "../../../utils/helpers";

const acceptAllCookiesButton = Selector(() =>
  document
    .querySelector("div[id=usercentrics-root]")
    .shadowRoot.querySelector('[data-testid="uc-accept-all-button"]')
);

const keepingCarRadioButton = Selector(
  '[data-testid*="keepingCarquoting"]'
).find('input[id*="radio"]');

const buyingCarRadioButton = Selector('[data-testid*="buyingCarquoting"]').find(
  'input[id*="radio"]'
);

const inceptionDateInput = Selector('[name="inceptionDate"]');

const validationLabel = Selector("[class*=ValidationLabel]");
const wizardTitle = Selector('[data-test-id="wizardTitle"]');

export async function acceptAllCookies() {
  await t.click(acceptAllCookiesButton);
}

async function selectKeepingCarRadioButton() {
  await t.click(keepingCarRadioButton);
}

async function selectBuyingCarRadioButton() {
  await t.click(buyingCarRadioButton);
}

export async function navigateToSelectPreconditionPage() {
  await t.navigateTo(selectPreconditionPageUrl);
  await t.expect(getCurrentPageUrl()).contains(selectPreconditionPageUrl);
}

export async function fillInceptionDateInput(inceptionDate) {
  await t.typeText(inceptionDateInput, inceptionDate, { replace: true });
}

export async function setKeepingBuyingCarRadioButton(isKeeping) {
  isKeeping ? selectKeepingCarRadioButton() : selectBuyingCarRadioButton();
}

export async function clearInceptionDateInput() {
  await t.selectText(inceptionDateInput).pressKey("delete");
  await t.click(wizardTitle); // click outside the field to switch focus from element
}

export async function verifyValidationLabelPresent() {
  await t.expect(validationLabel.exists).ok();
}

export async function verifyValidationLabelInnerText(expectedText) {
  await t.expect(validationLabel.innerText).contains(expectedText);
}
