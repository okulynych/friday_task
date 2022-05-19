import { Selector, t } from "testcafe";

const carLabel = Selector('[data-test-id="carLabel"]');

export async function verifyCarLabel(expectedCarLabel) {
  const actualCarLabel = carLabel.innerText;
  await t.expect(actualCarLabel).eql(expectedCarLabel);
}
