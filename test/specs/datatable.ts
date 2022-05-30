import datatablePage from "../pageobjects/datatable.page";

describe("To open datatable", () => {
    it("To fetch data from datatable", async () => {
        await browser.url("https://datatables.net/extensions/select/examples/initialisation/simple.html");
        const age = await $$("//td[4]")
        const ageData = age.map(e => e.getText())
        var ageNumber= parseInt(ageData)
        function ageFilter(ageNumber) {
            if ((ageNumber >= 20 && ageNumber <= 50)) {
                return ageNumber
            }
        }
        console.log(ageNumber)
    })
})