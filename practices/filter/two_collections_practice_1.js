'use strict';

function choose_common_elements(collection_a, collection_b) {

   return collection_a.filter(item => collection_b.find(element => element === item));

}

module.exports = choose_common_elements;
