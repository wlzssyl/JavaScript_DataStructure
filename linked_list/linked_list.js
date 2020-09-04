class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //append(element);向列表尾部增加新项
  append(element) {
    let newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
  //insert(position, element); 向链表特定位置插入新的项
  insert(position, element) {
    if(position < 0 || position > this.length) return false;
    let newNode = new Node(element);
    if (position === 0) {
      newNode.next = this.head.next;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;
      while (i++ < position) {
        previous = current;
        current = current.next;
      }
      //插入新节点
      previous.next = newNode;
      newNode.next = current;
    }
    this.length++;
  }
  //get(position); 获取对应位置处的元素
  get(position) {
    if(position < 0 || position > this.length-1) return false;
    let index = 0;
    let current = this.head;
    if(position === 0){
      return current;
    }else{
      while(index++ < position){
        current = current.next;
      }
      return current;
    }
  }
  //indexof(element); 返回元素再链表中的位置，没有则返回-1
  indexOf(element) {
    let current = this.head;
    let position = 0;
    while(current){
      if(element == current.element){
        return position;
      }else{
        current = current.next;
        position++;
      }
      if(position > this.length){
        reutrn -1;
      }
    }
  }
  //removeAt(position); 从链表特定位置移除一项
  removeAt(position) {
    if(position < 0 || position > this.length-1) return false;
    const current = this.get(position);
    if(position === 0){
      this.head = current.next;
      this.length--;
    }else{ 
      const previous = this.get(position-1);
      previous.next = current.next;
      this.length--;
    }
  }
  //update(position, element); 修改某个位置的元素
  update(position, element) {
    if(position < 0 || position > this.length-1) return false;
    const current = this.get(position);
    current.element = element;
  }
  //remove(element); 从链表中移出一项
  remove(element){
    const position = this.indexOf(element);
    if(position = -1) return false;
    this.removeAt(position);
  }
  //isEmpty(); 判断链表长度是否为0，为0返回true
  isEmpty() {
    if(this.length){
      return false;
    }else{
      return true;
    }
  }
  //size(); 返回链表元素个数
  size() {
    return this.length;
  }
}

let list = new linkedList();
list.append(111);
list.append(222);
list.append(333);
list.append(444);
console.log(list.head);

list.insert(1, 123);
console.log(list.head)

console.log(list.get(2));

console.log(list.indexOf(222));

list.removeAt(2);
console.log(list);

list.update(3,220);
console.log(list);

list.remove(111);
console.log(list);

console.log(list.isEmpty());
console.log(list.size());