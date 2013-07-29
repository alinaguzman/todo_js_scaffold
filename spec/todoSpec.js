describe ("Todo", function() {

    describe("todo clone method", function() {
        var task1 = clone(todoItem);
    });

    it("should be able to create a clone of the todoItem object", function() {
        expect(task1).toEqual(todoItem);
    });


});

