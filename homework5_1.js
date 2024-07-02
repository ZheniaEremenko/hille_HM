// Создаем объект с услугами и их стоимостью
var services = {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100,
    "Розбити скло": 200,
    //"Нова фича": 400,

    // Метод для вычисления общей стоимости услуг
    price: function () {
        var total = 0;
        for (let service in this) {
            if (typeof this[service] === "number") {
                total += this[service];
            }
        }
        return total;
    },

    // Метод для нахождения минимальной стоимости услуги
    minPrice: function () {
        var min = Infinity;
        for (let service in this) {
            if (typeof this[service] === "number") {
                if (this[service] < min) {
                    min = this[service];
                }
            }
        }
        return min;
    },

    // Метод для нахождения максимальной стоимости услуги
    maxPrice: function () {
        var max = -Infinity;
        for (let service in this) {
            if (typeof this[service] === "number") {
                if (this[service] > max) {
                    max = this[service];
                }
            }
        }
        return max;
    }
};
console.log("======= Загальна вартість:", services.price() + " грн =======");
console.log("======= Мінімальна вартість:", services.minPrice() + " грн =======");
console.log("======= Максимальна вартість:", services.maxPrice() + " грн =======");
