const assert = require('assert');

const coachDecide = (decision) => {
    let maximumSchedule = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (i = 0; i < decision.length; i++) {
        for (j = 0; j < decision[i].length; j++) {
            const element = decision[i][j];
            maximumSchedule[parseInt(element / 10) - 1][element % 10 - 1]+=4;
        };
    }
    return maximumSchedule;
}

describe('Make Appointments for coaches:', () => {
    it('1.Week schedule should be [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]', () => {
        assert.deepEqual(coachDecide([[], [], []]), [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
    })
    it('2.Week schedule should be [[0, 0, 0, 0], [0, 0, 0, 0], [0, 4, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]', () => {
        assert.deepEqual(coachDecide([[32, 43], [], []]), [[0, 0, 0, 0], [0, 0, 0, 0], [0, 4, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
    })
    it('3.Week schedule should be [[0, 0, 0, 0], [0, 0, 0, 0], [0, 8, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]', () => {
        assert.deepEqual(coachDecide([[32, 43], [32], []]), [[0, 0, 0, 0], [0, 0, 0, 0], [0, 8, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
    })
    it('4.Week schedule should be [[0, 0, 0, 0], [0, 0, 0, 0], [0, 12, 0, 0], [0, 0, 4, 0], [4, 4, 0, 0], [0, 0, 8, 0], [0, 0, 0, 4]]', () => {
        assert.deepEqual(coachDecide([[32, 43,51], [32,52,63], [32,63,74]]), [[0, 0, 0, 0], [0, 0, 0, 0], [0, 12, 0, 0], [0, 0, 4, 0], [4, 4, 0, 0], [0, 0, 8, 0], [0, 0, 0, 4]]);
    })
})  