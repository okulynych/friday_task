import { t } from "testcafe";
import { enterBirthDatePageUrl } from "../../../utils/constants";
import { getCurrentPageUrl } from "../../../utils/helpers";

export async function verifyCurrentPageUrl() {
  await t.expect(getCurrentPageUrl()).contains(enterBirthDatePageUrl);
}
