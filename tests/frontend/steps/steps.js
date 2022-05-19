import { clickSubmitButton } from "../pages/commonElements";

import {
  navigateToSelectPreconditionPage,
  setKeepingBuyingCarRadioButton,
  acceptAllCookies,
  fillInceptionDateInput,
  clearInceptionDateInput,
  verifyValidationLabelPresent,
  verifyValidationLabelInnerText,
} from "../pages/selectPreconditionPage";

import {
  setRegisterOnYourNameRadioButton,
  setRegisterOwnerUsedOrNewRadioButton,
} from "../pages/selectRegisteredOwnerPage";

import {
  fillFirstRegistrationInput,
  fillHsnInput,
  fillTsnInput,
} from "../pages/selectVehiclePage";

import { verifyCarLabel } from "../pages/showHsnTsnCarPage";

import { fillMonthYearOwnerRegisteredInput } from "../pages/enterRegistrationDatePage";

import { verifyCurrentPageUrl } from "../pages/enterBirthDatePage";

import {
  inceptionDateEmptyValidationMessage,
  inceptionDateValidationMessageFuture,
  inceptionDateValidationMessagePast,
} from "../../../utils/constants";

export async function openPreconditionsPage() {
  await navigateToSelectPreconditionPage();
  await acceptAllCookies();
}
export async function setPreconditions(isKeeping, inceptionDate) {
  await setKeepingBuyingCarRadioButton(isKeeping);
  await fillInceptionDateInput(inceptionDate);
  await clickSubmitButton();
}

export async function setRegistrationDetails(
  registeredOnYourName,
  usedWhenBuying
) {
  await setRegisterOnYourNameRadioButton(registeredOnYourName);
  await setRegisterOwnerUsedOrNewRadioButton(usedWhenBuying);
  await clickSubmitButton();
}

export async function pickCarByHsnTsn(firstRegistration, hsn, tsn) {
  await fillFirstRegistrationInput(firstRegistration);
  await fillHsnInput(hsn);
  await fillTsnInput(tsn);
  await clickSubmitButton();
}

export async function verifyCarSelected(expectedCarLabel) {
  await verifyCarLabel(expectedCarLabel);
  await clickSubmitButton();
}

export async function setOwnerRegistrationDetails(registrationDate) {
  await fillMonthYearOwnerRegisteredInput(registrationDate);
  await clickSubmitButton();
}

export async function verifyEnterBirthDatePageOpened() {
  await verifyCurrentPageUrl();
}

export async function verifyInceptionDateEmptyInput() {
  await clearInceptionDateInput();
  await verifyValidationLabelInnerText(inceptionDateEmptyValidationMessage);
}

export async function verifyInceptionDateInputFuture(inceptionDateFuture) {
  await fillInceptionDateInput(inceptionDateFuture);
  await verifyValidationLabelInnerText(inceptionDateValidationMessageFuture);
}

export async function verifyInceptionDateInputPast(inceptionDatePast) {
  await fillInceptionDateInput(inceptionDatePast);
  await verifyValidationLabelPresent();
  await verifyValidationLabelInnerText(inceptionDateValidationMessagePast);
}
