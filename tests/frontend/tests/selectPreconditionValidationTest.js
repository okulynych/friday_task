import {
  openPreconditionsPage,
  verifyInceptionDateEmptyInput,
  verifyInceptionDateInputFuture,
  verifyInceptionDateInputPast,
} from "../steps/steps";

import {
  setInceptionDateFuture,
  setInceptionDatePast,
} from "../../../utils/helpers";

fixture("SelectPreconditionPage validation test");
/*
This is a simple test that checks validation of inceptionDateInput field on selectPreconditionPage.
This test suite can be easily extended with other tests.
Methods that set input values and 'action' methods are separated and can be reused. 
To extend this test suite you can use the same data-driven approach as used in salesFunnelTest.
 */

test.before(async (t) => {
  await openPreconditionsPage();
})("SelectPreconditionPage validation test", async (t) => {
  // setting input data
  const inceptionDateFuture = await setInceptionDateFuture();
  const inceptionDatePast = await setInceptionDatePast();
  await verifyInceptionDateEmptyInput();
  await verifyInceptionDateInputFuture(inceptionDateFuture);
  await verifyInceptionDateInputPast(inceptionDatePast);
});
