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
    if (position < 0 || position > this.length) return false;
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
    if (position < 0 || position > this.length - 1) return false;
    let index = 0;
    let current = this.head;
    if (position === 0) {
      return current;
    } else {
      while (index++ < position) {
        current = current.next;
      }
      return current;
    }
  }
  //indexof(element); 返回元素再链表中的位置，没有则返回-1
  indexOf(element) {
    let current = this.head;
    let position = 0;
    while (current) {
      if (element == current.element) {
        return position;
      } else {
        current = current.next;
        position++;
      }
      if (position > this.length) {
        reutrn - 1;
      }
    }
  }
  //removeAt(position); 从链表特定位置移除一项
  removeAt(position) {
    if (position < 0 || position > this.length - 1) return false;
    const current = this.get(position);
    if (position === 0) {
      this.head = current.next;
      this.length--;
    } else {
      const previous = this.get(position - 1);
      previous.next = current.next;
      this.length--;
    }
  }
  //update(position, element); 修改某个位置的元素
  update(position, element) {
    if (position < 0 || position > this.length - 1) return false;
    const current = this.get(position);
    current.element = element;
  }
  //remove(element); 从链表中移出一项
  remove(element) {
    const position = this.indexOf(element);
    this.removeAt(position);
  }
  //isEmpty(); 判断链表长度是否为0，为0返回true
  isEmpty() {
    if (this.length) {
      return false;
    } else {
      return true;
    }
  }
  //size(); 返回链表元素个数
  size() {
    return this.length;
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
      if (this.length == 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position == this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let index = 0;
      let current = this.head;
      while (index++ < position) {
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
  /******************************************** 
  get(position); 获取对应位置的节点
  indexOf(element); 返回元素所在链表中的位置索引，没有的话返回-1
  get,indexOf方法继承自单向链表类
  *******************************************/
  //removeAt(position); 在链表指定位置删除节点
  removeAt(position) {
    if (position < 0 || position > this.length - 1) return false;
    let current = this.head;
    if (position == 0) {
      if (this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (position == this.length - 1) {
      current = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let index = 0;
      while(index++ < position){
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
    return current.element;
  }
  /**********************************
  以下方法可继承自单向链表
  //update(position, element); 修改某个位置的元素
  //remove(element); 在链表中删除该元素的节点
  //isEmpty(); 链表为空的话，返回true
  //size(); 返回链表节点个数
  **** */
}

let doubleList = new doubelLinkedList();
doubleList.append(111);
doubleList.append(222);
doubleList.append(333);
console.log(doubleList);

doubleList.insert(1, 101);
doubleList.insert(3, 202);
console.log(doubleList);

console.log(doubleList.get(3));
console.log(doubleList.indexOf(333));

console.log(doubleList.removeAt(4));

doubleList.update(0,100);
console.log(doubleList);

doubleList.remove(100);
console.log(doubleList);

console.log(doubleList.isEmpty());
console.log(doubleList.size());