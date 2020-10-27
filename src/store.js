

const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
 this.items.push(item)
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const findAndUpdate = function (id, newData) {
  const foundItem = this.findById(id);
  Object.assign(foundItem, newData);
};


export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate
};