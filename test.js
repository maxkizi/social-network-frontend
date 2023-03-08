let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

ingredients_list_deepcopy[1].list = ["rice flour", "water"];

ingredients_list_deepcopy[1].list.push('tea')

console.log(ingredients_list_deepcopy)