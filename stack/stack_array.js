/** 栈封装（数组）******************************* */
class StackArr {
  constructor() {
    this.array = []
  }
  //push(element),添加新元素到栈顶
  push(element) {
    this.array.push(element)
  }
  //pop() ,弹出栈顶元素并返回弹出的元素
  pop() {
    return this.array.pop()
  }
  //peak() ,返回栈顶元素，其他不做任何操作
  peak() {
    return this.array[this.array.length-1]
  }
  //isEmpty(),是否为空，是为true
  isEmpty() {
    return this.array.length === 0
  }
  //size() , 返回栈中元素个数
  size() {
    return this.array.length
  }
}
/***************************************************** */
/*十进制转二进制*************************************** */
function dec2bin(num) {
  const stack = new StackArr();
  //入栈
  while(num > 0){
    let re = num % 2;
    num = Math.floor(num/2);
    stack.push(re);
  }
  //出栈
  var bin = '';
  while(!stack.isEmpty()){
    bin += stack.pop();
  }
  return bin;
}

console.log(dec2bin(10));