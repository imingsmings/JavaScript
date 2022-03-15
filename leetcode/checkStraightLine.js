/*
在一个XY 坐标系中有一些点，我们用数组coordinates来分别记录它们的坐标，
其中coordinates[i] = [x, y]表示横坐标为 x、纵坐标为y的点。
请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，否则请返回 false。

思路:
以前两个坐标组成一个 y = kx + b 的一元一次方程
依次判断其它点是否满足这个条件
* */
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
    const k = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
    const b = coordinates[0][1] - k * coordinates[0][0];
    if (k === Infinity) {
        for (let i = 2; i < coordinates.length; i++) {
            if (coordinates[0][0] !== coordinates[i][0])
                return false;
        }
    } else if (k === 0) {
        for (let i = 2; i < coordinates.length; i++) {
            if (coordinates[0][1] !== coordinates[i][1]) {
                return false;
            }
        }
    } else {
        for (let i = 2; i < coordinates.length; i++) {
            if (coordinates[i][1] !== k * coordinates[i][0] + b) {
                return false;
            }
        }
    }
    return true;
};
// const coordinates = [[1,-2],[2,3],[3,4],[4,5],[5,6],[6,7]];
// const coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// const coordinates = [[1,3],[2,3],[5,10]]
const coordinates = [[0,0],[0,1],[0,-1]];
console.log(checkStraightLine(coordinates));