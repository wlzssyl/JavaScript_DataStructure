class queueArr {
  constructor() {
    this.array = []
  }
  //enqueue(element),向队尾添加项
  enqueue(element) {
    this.array.push(element);
  }
  //dequeue(), 移出队列第一个元素，并返回被移除的元素
  dequeue() {
    return this.array.shift();
  }
  //front(), 返回队列中第一个元素，不做其他操作
  front() {
    if(this.array.length === 0) return null;
    return this.array[0];
  }
  //isEmpty(), 如果队列为空，返回true
  isEmpty() {
    return this.array.length === 0;
  }
  //size(), 返回队列中的元素个数
  size() {
    return this.array.length;
  }

}