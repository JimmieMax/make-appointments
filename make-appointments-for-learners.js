const assert = require('assert');

const learnerDecide = (decision) => {
    let currentSchedule = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 12, 0, 0], [0, 0, 4, 0], [4, 4, 0, 0], [0, 0, 8, 0], [0, 0, 0, 4]]
    ,finalSchedule = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (i = 0; i < decision.length; i++) {
        for (j = 0; j < decision[i].length; j++) {
            let element = decision[i][j]
                ,day = parseInt(element / 10)
                ,course = element % 10;

            if(currentSchedule[day-1][course-1]>0) {
                currentSchedule[day-1][course-1]--;
                finalSchedule[day-1][course-1]++;
            }else{
                return `finalSchedule[${day}][${course}] overflow`;
            }
        }
    }
    return finalSchedule;
}

describe('Make appointments for learners:', () => {
    it('1.Final week schedule should be [[0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]', () => {
        assert.deepEqual(learnerDecide([[32, 43,52], [], []]), [[0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
    })
    it('2.Final week schedule should be finalSchedule[3][1] overflow', () => {
        assert.equal(learnerDecide([[31], [], []]), 'finalSchedule[3][1] overflow');
    })
    it('3.Final week schedule should be finalSchedule[4][3] overflow', () => {
        assert.equal(learnerDecide([[43], [43], [43], [43], [43]]), 'finalSchedule[4][3] overflow');
    })
    it('4.Final week schedule should be [[0, 0, 0, 0], [0, 0, 0, 0], [0, 3, 0, 0], [0, 0, 4, 0], [3, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 3]]', () => {
        assert.deepEqual(learnerDecide([[32,43,52], [32,43,74], [32,43,51], [43,51,74], [51,52,74]]), [[0, 0, 0, 0], [0, 0, 0, 0], [0, 3, 0, 0], [0, 0, 4, 0], [3, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 3]]);
    })
})  