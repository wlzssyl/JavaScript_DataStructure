import {Node, linkedList} from 'linkedList'

class doubleNode extends Node {
  constructor(element) {
    super(element);
    this.prev = null;
  }
}

class doubelLinkedList extends linkedList {
  constructor() {
    super();
    this.tail = null;
  }

  //append(element); 向链表尾部添加新的节点
  //insert(position, element); 向链表的特定位置插入一个新的节点
  //get(position); 获取对应位置的节点
  //indexOf(element); 返回元素所在链表中的位置索引，没有的话返回-1
  //update(position, element); 修改某个位置的元素
  //removeAt(position); 在链表指定位置删除节点
  //remove(element); 在链表中删除该元素的节点
  //isEmpty(); 链表为空的话，返回true
  //size(); 返回链表节点个数
}