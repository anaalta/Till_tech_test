describe("Till", function() {
  var till;

  beforeEach(function() {
    till = new Till();
  });

  it("should be able calculate the total sum for one product - line sum", function() {
    till.addToBill("Cafe Latte", 2);
    till.calculateTotal();
    expect(till.total).toEqual(9.50);
  });

  it("should be able calculate the total sum of the receipt", function() {
    till.addToBill("Cafe Latte", 1);
    till.addToBill("Americano", 1);
    till.calculateTotal();
    expect(till.total).toEqual(8.50);
  });
});
