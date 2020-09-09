class HashTable {
  constructor() {
    this.storage = [];  //哈希表（数组结构）
    this.count = 0;     //已存元素个数
    this.limit = 6;    //哈希表总长
  }
  /*** 哈希函数（str为要哈希的字符串， max为取余的除数） *********************** */
  hashFunc(str, max) {
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
      //str.charCodeAt()方法把字符串中的字符取出
      hashCode = hashCode * 31 + str.charCodeAt(i);
    }
    hashCode = hashCode % max;
    return hashCode;
  }

  //put(key, value)函数，放入元素{key, value}
  put(key, value) {
    //1.根据key映射到数组storage中
    const index = this.hashFunc(key, this.limit);

    //2.取出数组
    let bucket = this.storage[index];
    if (bucket == undefined) {
      bucket = [];
      this.storage[index] = bucket;
    }
    //3.判断新增还是修改
    let cover = false;
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        cover = true;
      }
    }
    //4.新增操作
    if (!cover) {
      bucket.push([key, value]);
      this.count++;
    }
  }
  //get(key),获取key对应元素的value
  get(key) {
    const index = this.hashFunc(key, this.limit);

    if (!this.storage[index]) {
      return null;
    } else {
      let bucket = this.storage[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }

      return null;
    }
  }
  //remove(key), 根据key值删除元素
  remove(key) {
    const index = this.hashFunc(key, this.limit);

    if (!this.storage[index]) {
      return false;
    } else {
      let bucket = this.storage[index];
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        if (tuple[0] === key) {
          bucket.splice(i, 1);
          this.count--;
          return tuple[1];
        }
      }
    }
  }
  isEmpty() {
    return this.count == 0;
  }
  size() {
    return this.count;
  }
}



// console.log(hashFunc("name", 7));
// console.log(hashFunc("ame", 7));
// console.log(hashFunc("me", 7));
// console.log(hashFunc("e", 7));

const hash = new HashTable();
hash.put("name", "abc");
hash.put("age", 18);
hash.put("height", 188);
hash.put("gender", "男");
console.log(hash.storage);

console.log(hash.get('gender'));
console.log(hash.remove('age'));
console.log(hash.storage);
