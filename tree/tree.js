class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
    this.root = null;
  }

  //insert(key),向树中插入新的键
  insert(key) {
    const newNode = new Node(key);
    if(!this.root){
      this.root = newNode;
    }else{
      this.insertNewNode(this.root, newNode);
    }
  }
  insertNewNode(root, newNode){
    if(root.key > newNode.key){
      if(!root.left){
        root.left = newNode;
      }else{
        this.insertNewNode(root.left, newNode);
      }
    }else{
      if(!root.right){
        root.right = newNode;
      }else{
        this.insertNewNode(root.right, newNode);
      }
    }
  }

  //search(key),在树中查找一个键，如果节点存在，则返回true，否则返回false
  //inOrderTraverse, 中序遍历所有节点
  //preOrderTraverse, 先序遍历所有节点
  //postOrderTraverse, 后序遍历所有节点
  //min,返回树中最小的键值
  //max,返回树中最大的键值
  //remove(key), 从树中移除某个键
}
/****************************************************** */

const bst = new BinarySearchTree();
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
console.log(bst)
