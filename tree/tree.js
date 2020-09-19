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
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNewNode(this.root, newNode);
    }
  }
  insertNewNode(root, newNode) {
    if (root.key > newNode.key) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNewNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNewNode(root.right, newNode);
      }
    }
  }
  //inOrderTraverse, 中序遍历所有节点
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  inOrderTraverseNode(node) {
    if (!node) return;
    this.inOrderTraverseNode(node.left);
    console.log(node.key);   //访问节点的键值
    this.inOrderTraverseNode(node.right);
  }
  //preOrderTraverse, 先序遍历所有节点
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  preOrderTraverseNode(node) {
    if (!node) return;
    console.log(node.key);   //访问节点的键值
    this.preOrderTraverseNode(node.left);
    this.preOrderTraverseNode(node.right);
  }
  //postOrderTraverse, 后序遍历所有节点
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  postOrderTraverseNode(node) {
    if (!node) return;
    this.postOrderTraverseNode(node.left);
    this.postOrderTraverseNode(node.right);
    console.log(node.key);   //访问节点的键值
  }
  //min,返回树中最小的键值
  min() {
    let node = this.root;
    while (node.right !== null) {
      node = node.left;
    }
    return node.key;
  }
  //max,返回树中最大的键值
  max() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.key;
  }
  //search(key),在树中查找一个键，如果节点存在，则返回true，否则返回false
  search(key) {
    return this.searchNode(this.root, key);
  }// 注意：不用递归，用while循环也可以实现
  searchNode(node, key) {
    if (node == null) return false;
    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }
  //remove(key), 从树中移除某个键
  remove(key) {
    let current = this.root;
    let parent = null;
    let isLeftChild = true;
    while (current.key != key) {
      if (key < current.key) {
        parent = current;
        current = current.left;
        isLeftChild = true;
      } else {
        parent = current;
        current = current.right;
        isLeftChild = false;
      }
      if (current == null) return false;
    }
    //找到key
    //1.删除的节点是叶子节点
    if (current.left === null && current.right === null) {
      if (current == this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    //2.删除的节点有一个字节点（左或右）
    else if (current.left === null) {//只有右子节点
      if (current == this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else if (current.right === null) {//只有左子节点
      if (current == this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    }
    //3.删除的节点有左右子节点
    return true;
  }
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

// bst.inOrderTraverse();
// bst.preOrderTraverse();
bst.postOrderTraverse();

console.log(bst.min());
console.log(bst.max());
console.log(bst.search(3));
console.log(bst.search(24));

bst.remove(3);
console.log(bst);
