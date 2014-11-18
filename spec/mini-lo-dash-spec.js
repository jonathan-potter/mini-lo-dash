;(function () {

    describe('_ (lo-dash)', function () {

        describe('#each', function () {

            it("runs the given function for each element", function () {
                var numbers, sum;

                numbers = [1,2,3,4,5];

                numberOfCalls = 0;
                sum = 0;
                _.each(numbers, function (number) {
                    sum += number;
                    numberOfCalls++;
                });

                expect(sum).toEqual(15);
                expect(numberOfCalls).toEqual(numbers.length);
            });

        });

        describe('#any', function () {
            var numberOverLimit, UPPER_LIMIT;

            UPPER_LIMIT = 10;

            numberOverLimit = function (number) {
                return number > UPPER_LIMIT;
            };

            it('returns true if any of the elements return true when passed to the given function', function () {
                var someElementsOverLimit;

                someElementsOverLimit = [10, 29, 1, 60, 2, 6, 0];

                definitelyTrue = _.any(someElementsOverLimit, numberOverLimit);

                expect(definitelyTrue).toEqual(true);
            });

            it('returns false if none of the elements return true when passed to the given function', function () {
                var allElementsBelowLimit;

                allElementsBelowLimit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                definitelyFalse = _.any(allElementsBelowLimit, numberOverLimit);

                expect(definitelyFalse).toEqual(false);
            });

        });

        describe('#map', function () {

            it('returns the given array with each element changed by the mapping function', function () {
                var animals, firstLetters;

                animals = ['wombat', 'otter', 'racoon', 'kangaroo', 'iguana', 'nute', 'gorilla'];

                firstLetters = _.map(animals, function (animal) {
                    return animal[0];
                });

                expect(firstLetters.join('')).toEqual("working");
            });

        });

        describe('#select', function () {
            var catsWithOwners;

            catsWithOwners = [
                {
                    owner: "supercat",
                     name: "shadow"
                },
                {
                    owner: "supercat",
                     name: "ziggy"
                },
                {
                    owner: "megacat",
                     name: "domino"
                },
                {
                    owner: "supercat",
                     name: "misha"
                },
                {
                    owner: "megacat",
                     name: "applesauce"
                }
            ];

            it('returns all of the elements that return true when passed to the test function', function () {
                catsOwnedBySupercat = _.select(catsWithOwners, function (catWithOwner) {
                    return catWithOwner.owner === "supercat";
                });

                catNames = _.map(catsOwnedBySupercat, function (catOwnedBySupercat) {
                    return catOwnedBySupercat.name;
                });

                expect(catNames).toEqual(['shadow', 'ziggy', 'misha']);
            });

        });

        describe('#reject', function () {

            WICKED_OLD_FOR_A_CAT = 20;

            cats = [
                {
                    name: "supercat",
                     age: 10000
                },
                {
                    name: "megacat",
                     age: 10001
                },
                {
                    name: "steve",
                     age: 1
                },
                {
                    name: "shadow",
                     age: 8
                },
                {
                    name: "misha",
                     age: 3
                },
                {
                    name: "tuna",
                     age: 5
                },
            ];

            it('returns all of the elements that return false when passed to the test function', function () {
                var namesOfOldCats, oldCats;

                oldCats = _.reject(cats, function (cat) {
                    return cat.age < WICKED_OLD_FOR_A_CAT;
                });

                namesOfOldCats = _.map(oldCats, function (oldCat) {
                    return oldCat.name;
                })

                expect(namesOfOldCats).toEqual(['supercat', 'megacat'])
            });

        });

        describe('#reduce', function () {

            it('can sum a group of input numbers', function () {
                var numbers, sum;

                numbers = [1,2,3,4,5];

                sum = _.reduce(numbers, function (sum, number) {
                    return sum + number;
                }, 0);

                expect(sum).toEqual(15);
            });

            it('can serialize strings from an array', function () {
                var strings;

                strings = ['e', 'r', 'm', 'a', 'g', 'e', 'r', 'd'];

                concatinatedString = _.reduce(strings, function (concatinatedString, string) {
                    return concatinatedString + string;
                }, "");

                expect(concatinatedString).toEqual('ermagerd');
            });

        });

    });

})();