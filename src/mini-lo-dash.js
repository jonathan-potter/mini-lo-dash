;(function (root) {
    var _;

    _ = root._ = (root._ || {});

    _.each = function (array, callback) {
        var element, index;

        for (index = 0; index < array.length; index++) {
            element = array[index];

            callback(element);
        }
    };

    _.any = function (array, callback) {
        var anyTruthy;

        anyTruthy = false;
        _.each(array, function (element) {
            anyTruthy = anyTruthy || callback(element);
        });

        return !!anyTruthy;
    };

    _.map = function (array, callback) {
        var index, mappedArray;

        mappedArray = [];
        for(index = 0; index < array.length; index++) {
            element = array[index];

            mappedArray.push(callback(element));
        }

        return mappedArray;
    };

    _.select = function (array, callback) {
        var index, selectedElements;

        selectedElements = [];
        for (index = 0; index < array.length; index++) {
            element = array[index];

            if (callback(element)) {
                selectedElements.push(element);
            }
        }

        return selectedElements;
    };

    _.reject = function (array, callback) {
        var index, selectedElements;

        selectedElements = [];
        for (index = 0; index < array.length; index++) {
            element = array[index];

            if (!callback(element)) {
                selectedElements.push(element);
            }
        }

        return selectedElements;
    };

    _.reduce = function (array, callback, initialValue) {
        var accumulator, element, index;

        accumulator = initialValue;
        for (index = 0; index < array.length; index++) {
            element = array[index];

            accumulator = callback(accumulator, element);
        }

        return accumulator;
    };

})(window);