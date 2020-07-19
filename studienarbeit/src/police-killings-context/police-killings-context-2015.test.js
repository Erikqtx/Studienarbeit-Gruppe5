import { readFileSync } from "fs";
import { loadPoliceKillings2015Data } from "./police-killings-context-2015";
describe("police-killings-context", () => {
  describe("loadPoliceKillings2015Data", () => {
    it("should provide police-killings-2015.csv as json promise", async () => {
      const csvContent2015 = readFileSync(
        __dirname + "/../../public/police-killings-2015.csv",
        "utf8"
      );
      const rows2015 = csvContent2015.split("\r");
      const labels2015 = rows2015[0].split(",");
      fetch.mockResponseOnce(csvContent2015);
      const data2015 = await loadPoliceKillings2015Data();
      expect(data2015.length).toEqual(rows2015.length - 1);
    });
  });
});
