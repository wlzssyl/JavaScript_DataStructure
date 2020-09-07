/*** 哈希函数（str为要哈希的字符串， max为取余的除数） *********************** */
function hashFunc(str, max) {
  let hashCode = 0;
  for(let i=0;i<str.length;i++) {
    //str.charCodeAt()方法把字符串中的字符取出
    hashCode = hashCode*31 + str.charCodeAt(i);
  }
  hashCode = hashCode % max;
  return hashCode;
}

console.log(hashFunc("name", 7));
console.log(hashFunc("ame", 7));
console.log(hashFunc("me", 7));
console.log(hashFunc("e", 7));