import {
  openPreconditionsPage,
  setPreconditions,
  setRegistrationDetails,
  pickCarByHsnTsn,
  verifyCarSelected,
  setOwnerRegistrationDetails,
  verifyEnterBirthDatePageOpened,
} from "../steps/steps";

import {
  getVehicle,
  setInceptionDate,
  setRegistrationDates,
  readTestData,
} from "../../../utils/helpers";

import { SalesFunnelTestData } from "../../data/salesFunnelTestData";

import { navigateToSelectPreconditionPage } from "../pages/selectPreconditionPage";

fixture("Sales Funnel test suite");
/* 
In this test, I decided to use a data-driven approach, when test flow is defined by test data.
Test cases are defined in SalesFunnelTestData, I read them using readTestData method and
execute them one by one.
According to the requirements, I had to choose 3 different car brands, each brand with three different cars.
I noticed, that enterRegistrationDate page appears when 2 conditions are fulfilled:
 - when the car is already insured, 
 - when the car is used. 
I decided to test these conditions using Decision Table (see screenshot).
Summarizing all the above, test data for this test was selected to test at the same time 2 things:
 - decision table that shows whether enterRegistrationDate page appears on the screen;
 - selection of 3 car brands with 3 different models (selected by HSN/TSN).
*/

test.before(async (t) => {
  await openPreconditionsPage();
})("Sales Funnel test", async (t) => {
  const testCases = await readTestData(SalesFunnelTestData);
  for (const testCase of testCases) {
    const { isKeeping, registeredOnYourName, usedWhenBuying, HSN, TSN } = {
      ...testCase,
    };
    // Retrieving expectedDisplayName from lookup
    const expectedDisplayName = await getVehicle(HSN, TSN);
    const inceptionDate = await setInceptionDate();
    const [firstRegistrationDate, yourRegistrationDate] =
      await setRegistrationDates();

    await setPreconditions(isKeeping, inceptionDate);
    await setRegistrationDetails(registeredOnYourName, usedWhenBuying);
    await pickCarByHsnTsn(firstRegistrationDate, HSN, TSN);
    await verifyCarSelected(expectedDisplayName);
    if (isKeeping && usedWhenBuying) {
      await setOwnerRegistrationDetails(yourRegistrationDate);
    }
    await verifyEnterBirthDatePageOpened();
    // returning to the test's start page - SelectPreconditionPage
    await navigateToSelectPreconditionPage();
  }
});
