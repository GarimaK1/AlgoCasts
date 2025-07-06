// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const q = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        };
    
        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }

    return q;
}


// Attempt on 5th July 2025:
function weave(sourceOne, sourceTwo) {
    const q = new Queue();
    
    // Alternate adding items to q while both sourceOne & sourceTwo have stuff in them.
    // If either one ends, end loop.
    while (sourceOne.peek() !== undefined && sourceTwo.peek() !== undefined) {
        q.add(sourceOne.remove());
        q.add(sourceTwo.remove());
    }

    // At this point, only one of sourceOne & sourceTwo has items, so only one while loop will run.
    while (sourceOne.peek() !== undefined) {
        q.add(sourceOne.remove());
    }

    while (sourceTwo.peek() !== undefined) {
        q.add(sourceTwo.remove());
    }
    
    return q;
}

//Old Attempt
// My solution: Is unnecessarily complicated. Use Stephen's version above.
// function weave(sourceOne, sourceTwo) {
//     const q3 = new Queue();
//     let nextSource = sourceOne;
//     while (nextSource.peek()) {
//         q3.add(nextSource.remove());
//         nextSource = nextSource === sourceOne ? sourceTwo : sourceOne;
//     }
//     nextSource = nextSource === sourceOne ? sourceTwo : sourceOne;
//     while (nextSource.peek()) {
//         q3.add(nextSource.remove());
//     }
    
//     return q3;
// }

module.exports = weave;
