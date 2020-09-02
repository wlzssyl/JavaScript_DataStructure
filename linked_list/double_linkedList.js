/*单向链表**************************** */
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
}
//*********************************** */
//双向链表节点
class doubleNode extends Node {
  constructor(element) {
    super(element);
    this.prev = null;
  }
}//双向链表
class doubelLinkedList extends linkedList {
  constructor() {
    super();
    this.tail = null;
  }

  //append(element); 向链表尾部添加新的节点
  append(element) {
    const newNode = new doubleNode(element);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  //insert(position, element); 向链表的特定位置插入一个新的节点
  insert(position, element) {
    const newNode = new doubleNode(element);
    if (position < 0 || position > this.length) return false;
    if (position == 0) {
      if(this.length == 0) {
        this.head = newNode;
        this.tail = newNode;
      }else{
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }else if(position == this.length){
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }else{
      let index = 0;
      let current = this.head;
      while(index++ < position){
        current = current.next;
      }
      //找到currnet位置后
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
    }

    this.length++;
  }
  //get(position); 获取对应位置的节点
  //indexOf(element); 返回元素所在链表中的位置索引，没有的话返回-1
  //update(position, element); 修改某个位置的元素
  //removeAt(position); 在链表指定位置删除节点
  //remove(element); 在链表中删除该元素的节点
  //isEmpty(); 链表为空的话，返回true
  //size(); 返回链表节点个数
}

let doubleList = new doubelLinkedList();
doubleList.append(111);
doubleList.append(222);
doubleList.append(333);
console.log(doubleList);

doubleList.insert(1,101);
doubleList.insert(3,202);