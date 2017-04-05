var Enumeration = function() {}

Enumeration.prototype = {

  find: function(array, findFunc){
    for (var element of array){
      if(findFunc(element)){
        return element;
      }
    }
  },
  map: function(array, mapFunc){
    var newArray = []
    for (var element of array){
      newArray.push(mapFunc(element))
    }
    return newArray
  },
  filter: function(array, filterFunc){
    var newArray = [];
    for(var element of array){
      if(filterFunc(element)){
        newArray.push(element);
      }
    }
    return newArray;
  },
  some: function(array, someFunc){
    for(var element of array){
      if(someFunc(element)) {
        return true}
    }
    return false
  },
  every: function(array, everyFunc){
    for(var element of array){
      if(!everyFunc(element)){
        return false;
      }
    }
    return true;
  },
  reduce: function(array, reduceFunc){
    var result = 0
    for(var element of array){
      result = reduceFunc(result, element);
    }
    return result;
  }
}
module.exports = Enumeration;