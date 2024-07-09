const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1 Zhenia',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1 OLENA',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2 ALINA',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3 Dima',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2 Kristian',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findCompany(companyName) {
    for (const client of company.clients) {
        if (client.name === companyName) {
            return client;
        }
        if (client.partners) {
            for (const partner of client.partners) {
                if (partner.name === companyName) {
                    return partner;
                }
                if (partner.partners) {
                    for (const nestedPartner of partner.partners) {
                        if (nestedPartner.name === companyName) {
                            return nestedPartner;
                        }
                    }
                }
            }
        }
    }
    return null;
}

const result = findCompany('Клієнт 2 Kristian');
console.log(result);
