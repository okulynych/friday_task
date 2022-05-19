import { ClientFunction } from "testcafe";
import { vehicleLookupUrl } from "./constants";
const fetch = require("node-fetch");

export const getCurrentPageUrl = ClientFunction(() => document.location.href);

export async function getVehicle(HSN, TSN) {
  const response = await fetch(
    vehicleLookupUrl +
      new URLSearchParams({
        hsn: HSN,
        tsn: TSN,
      }),
    {
      method: "get",
    }
  );
  if (response.ok) {
    const data = await response.json();
    const vehicle = data[0];
    return vehicle.make + " " + vehicle.gdvLabel + ", " + vehicle.displayName;
  } else {
    console.log(
      `Could not retrieve vehicle by HSN/TSN,
      response has ${response.status} and message ${response.statusText}`
    );
  }
}

export async function setInceptionDate() {
  // inceptionDate allows values between today and 3 month forward
  const inceptionDate = new Date();
  inceptionDate.setDate(
    inceptionDate.getDate() + Math.floor(Math.random() * 90)
  );
  return await formatInceptionDate(inceptionDate);
}

export async function setInceptionDateFuture() {
  const inceptionDateFuture = new Date();
  inceptionDateFuture.setFullYear(inceptionDateFuture.getFullYear() + 1);
  return await formatInceptionDate(inceptionDateFuture);
}

export async function setInceptionDatePast() {
  const inceptionDatePast = new Date();
  inceptionDatePast.setDate(inceptionDatePast.getDate() - 10);
  return await formatInceptionDate(inceptionDatePast);
}

export async function setRegistrationDates() {
  // firstRegistrationDate allows values between today and 40 years behind.
  const firstRegistrationDate = new Date();
  firstRegistrationDate.setFullYear(
    firstRegistrationDate.getFullYear() - Math.floor(Math.random() * 40)
  );

  // yourRegistrationDate allows values firstRegistrationDate and today.
  const yourRegistrationDate = await getRandomDateBetweenDates(
    firstRegistrationDate,
    new Date()
  );
  return [
    await formatRegistrationDate(firstRegistrationDate),
    await formatRegistrationDate(yourRegistrationDate),
  ];
}

export async function readTestData(testData) {
  const testCases = Object.values(testData);
  return testCases;
}

async function getRandomDateBetweenDates(startDate, endDate) {
  let dates = [];
  const theDate = new Date(startDate);
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  dates = [...dates, endDate];
  return dates[Math.floor(Math.random() * dates.length)];
}

async function formatRegistrationDate(registrationDate) {
  const formatted = registrationDate
    .toLocaleDateString("en-GB")
    .slice(3)
    .replace(/\//g, ".");
  return formatted;
}

async function formatInceptionDate(inceptionDate) {
  const formatted = inceptionDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, ".");
  return formatted;
}
