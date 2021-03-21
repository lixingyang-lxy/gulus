let filter = function(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]"
    ? [...new Set(arr)]
    : new Error("不是数组");
};

module.exports = filter;
