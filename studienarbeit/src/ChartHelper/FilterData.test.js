import { extractMonths, extractRace, extractState } from "./FilterData";
describe("charthelper", () => {
  describe("extractMonths", () => {
    it("should return an empty list on no input", () => {
      expect(extractMonths([])).toEqual([]);
    });
    it("should extract months as a string", () => {
      const input = [
        {
          uid: "2",
          name: "Matthew Ajibade",
          age: "22",
          gender: "Male",
          raceethnicity: "Black",
          month: "January",
          day: "1",
          year: "2015",
          streetadress: "1050 Carl Griffin Dr",
          city: "Savannah",
          state: "GA",
          classification: "Death in custody",
          lawenforcementagency: "Chatham County Sheriff's Office",
          armed: "No",
        },
      ];
      expect(extractMonths(input)).toEqual([input[0].month]);
    });
  });
  describe("extractRace", () => {
    it("should return an empty list on no input", () => {
      expect(extractRace([])).toEqual([]);
    });
    it("should extract the race as a string", () => {
      const input = [
        {
          uid: "2",
          name: "Matthew Ajibade",
          age: "22",
          gender: "Male",
          raceethnicity: "Black",
          month: "January",
          day: "1",
          year: "2015",
          streetadress: "1050 Carl Griffin Dr",
          city: "Savannah",
          state: "GA",
          classification: "Death in custody",
          lawenforcementagency: "Chatham County Sheriff's Office",
          armed: "No",
        },
      ];
      expect(extractRace(input)).toEqual([input[0].raceethnicity]);
    });
  });
  describe("extractState", () => {
    it("should return an empty list on no input", () => {
      expect(extractState([])).toEqual([]);
    });
    it("should extract the State as a string", () => {
      const input = [
        {
          uid: "2",
          name: "Matthew Ajibade",
          age: "22",
          gender: "Male",
          raceethnicity: "Black",
          month: "January",
          day: "1",
          year: "2015",
          streetadress: "1050 Carl Griffin Dr",
          city: "Savannah",
          state: "GA",
          classification: "Death in custody",
          lawenforcementagency: "Chatham County Sheriff's Office",
          armed: "No",
        },
      ];
      expect(extractState(input)).toEqual([input[0].state]);
    });
  });
});
