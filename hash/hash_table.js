const max_loadFactor = 0.75;
const min_loadFactor = 0.25;

class HashTable {
  constructor() {
    this.storage = [];  //哈希表（数组结构）
    this.count = 0;     //已存元素个数
    this.limit = 7;    //哈希表总长
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
      //判断是否要扩容
      if (this.count / this.limit > max_loadFactor) {
        this.resize(this.getPrime(2 * this.limit));
      }
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
          //判断是否要减容
          if (this.count < 8 && this.count / this.limit < min_loadFactor) {
            this.resize(this.getPrime(Math.floor(this.limit / 2)));
          }
          return tuple[1];
        }
      }
    }
  }
  //resize（newLimit）扩容函数
  resize(newLimit) {
    //1.保存旧数组内容
    let oldStorage = this.storage;
    //2.重置属性
    this.limit = newLimit;
    this.storage = [];
    this.count = 0;
    //3.取出oldStorage的元素放入storage
    for (let i = 0; i < oldStorage.length; i++) {
      let bucket = oldStorage[i];
      if (!bucket) {
        continue;
      }
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    }

  }
  //isPrime(num),判断数字是否为质数
  isPrime(num) {
    let temp = Math.ceil(Math.sqrt(num));
    for (let i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  //getPrime(num),将num逐一累加得到质数
  getPrime(num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  }


  isEmpty() {
    return this.count == 0;
  }
  size() {
    return this.count;
  }
}
/****************************************************** */
function Prime(num) {
  let temp = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= temp; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;

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
console.log(hash);

hash.put('aaa', 111)
hash.put('bbb', 111)
hash.put('ccc', 111)
hash.put('ddd', 111)
hash.put('eee', 111)
hash.put('fff', 111)
hash.put('ggg', 111)
hash.put('hhh', 111)
hash.put('iii', 111)
console.log(hash)

console.log(Prime(11))
console.log(Prime(111))
console.log(Prime(97))
