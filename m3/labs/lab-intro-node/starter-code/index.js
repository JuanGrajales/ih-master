class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length 
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => {
      return a-b
    })
    this.length = this.items.length 
  }

  // arr = [0,1,2,3,4]
  get(pos) {
    if(pos >= this.items.length)
      throw new Error("OutOfBounds");
    else
      return this.items[pos]
  }

  max() {
    if(this.items.length === 0)
      throw new Error("OutOfBounds");
    else
      return Math.max.apply(null, this.items)
    // Math.max.apply(this.items), https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

    // let arr2 = [9,8,7,6,5,4,3,2,1,10]

    // let sum = arr2.reduce((accu, curr) => {
    //   console.log(accu, curr)
    //   return accu + curr;
    // }, 0);
    // console.log(sum)

    // let max = arr2.reduce((max, curr) => {
    //   console.log(max, curr)
    //   return Math.max(max, curr);
    // });

    // console.log(max)
  }

  min() {
    if(this.items.length === 0)
      throw new Error("OutOfBounds");
    else
      return Math.min.apply(null, this.items)
  }

  sum() {
    if(this.items.length === 0)
      return 0
    else
      return this.items.reduce((accu, curr) => {
          return accu + curr;
        }, 0);
  }

  avg() {
    if(this.items.length === 0)
      throw new Error("OutOfBounds");
    else
      var sum = this.items.reduce((accu, curr) => {
          return accu + curr;
        }, 0);

    return sum/this.items.length
  }
}

module.exports = SortedList;