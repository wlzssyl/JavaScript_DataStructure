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

//优先级队列
class queueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
class priorityQueue extends queueArr {
  enqueue(element, priority) {
    //将元素和优先级封在一起
    const queueE = new queueElement(element, priority);
    //将封好的元素放入队列
    if(this.isEmpty()){
      this.array.push(queueE);
    }else{
      let add = false; //标记是否添加了元素
      for(let i=0;i<this.array.length;i++){
        if(this.array[i].priority > queueE.priority){
          this.array.splice(i, 0, queueE);
          add = true;
          break;
        }
      }
      if(!add){
        this.array.push(queueE);
      }
    }
  }
}

/**击鼓传花********************************************** */
//nameList为名字数组，num为数的数字
function passGame(nameList, num) {
  const queue = new queueArr();
  for(let i=0; i<nameList.length; i++){
    queue.enqueue(nameList[i]);
  }
  //根据数字讲前面没书到数字的人出队，并同时加到队尾
  while(queue.size() > 1){
    for(let i=0; i<num-1; i++){
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();   //将num对应的人出队
  }
  return queue.front();
}

const name = [1,2,3,4,5,6];
console.log(passGame(name, 1));

//测试优先级队列
const p = new priorityQueue();
p.enqueue(111,1);
p.enqueue(333,3);
p.enqueue(555,5);
p.enqueue(666,6);
p.enqueue(222,2);
p.enqueue(444,4);
console.log(p.array);
