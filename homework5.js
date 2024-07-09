// Создаем объект с тремя свойствами
let obj = {
    name: "ZHenia",
    age: 22,
    worker: "QA_Engineer",
    getInfo: function () {
        for (let property in this) {
            if (typeof this[property] !== 'function') {
                console.log(`${property}: ${this[property]}`);
            }
        }
    }
};
obj.getInfo();
console.log('=============================================')
obj.newProperty = "Add new Property with something description";
obj.getInfo();
