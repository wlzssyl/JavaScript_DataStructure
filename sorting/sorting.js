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
   *    即每轮完成就将一个最大数放在后面
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
  /**
   * 插入排序
   *  - 首先认为第一个数（索引值为0）为有序，从索引为1的数开始逐个循环，每次将该数据与其之前的有序数列比较大小，
   *     直至找到合适的位置并插入
   *  - 注意，比较的时候就可以边比较便移动有序数列的位置，到时直接赋值插入
   *  - 比较次数，平均认为N(N-1)/4,最大为N(N-1)/2
   *  - 复制次数，平均认为N(N-1)/4
   *  - 插入排序适合用于基本有序的数据。
   */
  insertionSort() {
    for (let i = 1; i < this.array.length; i++) {
      let temp = this.array[i];
      let j = i;
      while (temp < this.array[j - 1] && j > 0) {//因为未知循环次数，这里要用while循环
        this.array[j] = this.array[j - 1];
        j--;
      }
      //此时j为当前i对应的值应该放的位置
      this.array[j] = temp;
    }
  }
  /**
   * 希尔排序
   *  - 
   */
  shellSort() {
    let length = this.array.length;
    let gap = Math.floor(length / 2);
    //间隔gap逐步减小
    while (gap >= 1) {
      //分组并插入排序
      for (let i = gap; i < length; i++) {
        let temp = this.array[i];
        let j = i;
        while (this.array[j - gap] > temp && j >= gap) {
          this.array[j] = this.array[j - gap];
          j -= gap;
        }
        //此时找到位置并插入
        this.array[j] = temp;
      }
      //每轮结束后gap/2
      gap = Math.floor(gap / 2);
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
// arr.selectionSort();
// arr.insertionSort();
arr.shellSort();
arr.toString();
