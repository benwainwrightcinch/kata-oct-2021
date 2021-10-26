type Interval = [number, number]

//
// An interval is a pair of numbers with a length
// 
// e.g. [1, 5] -> length is 4
//
// Where multiple intervals overlap, they are treated like a single interval, e.g.
//
// [
//   [1,4],
//   [3,5]
// ]
//
// These intervals are treated like a single interval [1, 5]
//
// Write a function that takes a list of intervals and calculates the SUM of all the INTERVAL LENGTHS
//
// e.g.
//
//
// const intervals = [
//   [1,2],    --> length 1
//   [6, 10],  --> length 4
//   [11, 15]  --> length 4
// ]
//
// sumIntervals(intervals) --> 9
//
//
// const intervalsWithOverlap = [
//    [1,4],   --> overlaps with [3, 5]
//    [7, 10], --> length 3
//    [3, 5]   --> overlaps with [1, 4] --> length of both combined is 4
// ];
//
// sumIntervals(intervalsWithOverlaps) --> 7


export const  sumIntervals = (intervals: ReadonlyArray<Interval>) => {
  return ""
}
