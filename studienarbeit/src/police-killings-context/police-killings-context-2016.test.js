import { readFileSync } from "fs";
import { loadPoliceKillings2016Data } from "./police-killings-context-2016";
describe("police-killings-context", () => {
  describe("loadPoliceKillings2016Data", () => {
    it("should provide police-killings-2016.csv as json promise", async () => {
      const csvContent2016 = readFileSync(
        __dirname + "/../../public/police-killings-2016.csv",
        "utf8"
      );
      const rows2016 = csvContent2016.split("\r");
      const labels2016 = rows2016[0].split(",");
      fetch.mockResponseOnce(csvContent2016);
      const data2016 = await loadPoliceKillings2016Data();
      expect(data2016.length).toEqual(rows2016.length - 1);
    });
  });
});
