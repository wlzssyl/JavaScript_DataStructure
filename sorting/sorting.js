class ArrayList {
  constructor() {
    this.array = [];
  }
  insert(e) {
    return this.array.push(e);
  }
  toString() {
    console.log(this.array.join(','));
    return this.array.join(',');
  }

  /**
   * 冒泡排序
   *  - 两两比较，将其中的大者换在后面，依次将所有数据比完
   *    即每轮完成就把最大的放在了后面，
   *    如此循环
   */
  bubbleSort() {
    for (let i = 0; i < this.array.length - 1; i++) {//循环n次
      for(let j = 0;j<this.array.length - i;j++){ //每次比较都可以比上次少比较一组数
        if(this.array[j]>this.array[j+1]){//如果前者大则换位
          let temp = this.array[j];
          this.array[j] = this.array[j+1];
          this.array[j+1] = temp;
        }
      }
    }
  }

}
/******************************* */
let arr = new ArrayList()
arr.insert(111);
arr.insert(222);
arr.insert(22);
arr.insert(2);
arr.insert(34);
arr.insert(536);
arr.insert(888);
arr.insert(45);
arr.insert(101);
console.log(arr);

arr.bubbleSort();
arr.toString();
