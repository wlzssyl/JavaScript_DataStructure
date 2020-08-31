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

  //indexof(element); 返回元素再链表中的位置，没有则返回-1

  //update(position, element); 修改某个位置的元素

  //removeAt(position); 从链表特定位置移除一项

  //remove(element); 从链表中移出一项

  //isEmpty(); 判断链表长度是否为0，为0返回true

  //size(); 返回链表元素个数

}

let list = new linkedList();
list.append(111);
list.append(222);
list.append(333);
list.append(444);
console.log(list.head);

list.insert(1, 123);
console.log(list.head)