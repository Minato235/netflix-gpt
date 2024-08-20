var resultsArray = function(nums, k) {
    let res = [];
    let i = 0;

    while (i <= nums.length - k) {
        let slice = nums.slice(i, i + k);
        let isSequence = true;

        for (let j = 0; j < slice.length - 1; j++) {
            if (slice[j + 1] - slice[j] !== 1) {
                isSequence = false;
                break;
            }
        }

        if (isSequence) {
            res.push(slice[k - 1]); // Push the last element if it's a valid sequence
        } else {
            res.push(-1); // Push -1 if the sequence is broken
        }

        i += 1;
    }

    return res;
};

