//filter Months
export function extractMonths(input) {
  return input.map((entry) => {
    return entry.month;
  });
}
//Filter raceethnicity
export function extractRace(input) {
  return input.map((entry) => {
    return entry.raceethnicity;
  });
}
//Filter States
export function extractState(input) {
  return input.map((entry) => {
    return entry.state;
  });
}
