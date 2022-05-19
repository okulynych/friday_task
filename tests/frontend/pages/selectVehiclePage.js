import { Selector, t } from "testcafe";

const firstRegistrationInput = Selector("[name=monthYear]");

const hsnInput = Selector("[name=hsn]");

const tsnInput = Selector("[name=tsn]");

export async function fillFirstRegistrationInput(firstRegistration) {
  await t.typeText(firstRegistrationInput, firstRegistration, {
    replace: true,
  });
}

export async function fillHsnInput(hsnValue) {
  await t.typeText(hsnInput, hsnValue, { replace: true });
}

export async function fillTsnInput(tsnValue) {
  await t.typeText(tsnInput, tsnValue, { replace: true });
}
