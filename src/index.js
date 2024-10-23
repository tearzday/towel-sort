// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];

    if (!matrix) return [];

    for (let countRow = 0; countRow < matrix.length; countRow++) {
        for (let countCol = 0; countCol < matrix[countRow].length; countCol++) {
            let indexRow =
                countRow % 2
                    ? matrix[countRow].length - 1 - countCol
                    : countCol;
            result.push(matrix[countRow][indexRow]);
        }
    }

    return result;
};
