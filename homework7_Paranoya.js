var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];

// Регулярний вираз для перевірки email
var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Фільтруємо та отримуємо масив надійних адрес
var trustedEmails = arr
    .map(obj => obj.email)
    .filter(email => emailRegex.test(email));

console.log(trustedEmails); // ['test.test@gmail.com', 'dmitro.porohov@yahoo.com']
