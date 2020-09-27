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
   *    即每轮完成就
   *  - 冒泡排序比较次数为N(N-1)/2,则大O表示法为O(N²)
   *    冒泡排序交换次数也为O(N²)
   */
  bubbleSort() {
    for (let i = 0; i < this.array.length - 1; i++) {//循环n次
      for (let j = 0; j < this.array.length - i; j++) { //每次比较都可以比上次少比较一组数
        if (this.array[j] > this.array[j + 1]) {//如果前者大则换位
          let temp = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = temp;
        }
      }
    }
  }
  /**
   * 选择排序
   *  - 从索引值为0的位置开始，将其value与其余依次比较，每次挑出最小值与其换位置
   *    循环n次，即可实现从小到大排列
   *  - 选择排序与冒泡相同比较次数为N(N-1)/2,则大O表示法为O(N²)
   *    选择排序交换次数为N-1，大O表示法为O(N),
   *  - 所以认为选择排序执行效率大于冒泡排序
   */
  selectionSort() {
    for (let j = 0; j < this.array.length - 1; j++) {
      let minIndex = j;
      let currentMin = this.array[j];
      for (let i = j; i < this.array.length - 1; i++) {
        if (currentMin > this.array[i + 1]) {
          minIndex = i + 1;
          currentMin = this.array[i + 1];
        }
      }
      //一轮结束，交换位置
      let temp = this.array[minIndex];
      this.array[minIndex] = this.array[j];
      this.array[j] = temp;
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

// arr.bubbleSort();
arr.selectionSort();
arr.toString();
