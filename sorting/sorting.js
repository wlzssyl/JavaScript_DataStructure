class ArrayList {
  constructor() {
    this.array = [];
  }
  insert(e) {
    return  this.array.push(e);
  }
  
}
/******************************* */
let array = new ArrayList()
array.insert(111);
console.log(array)
