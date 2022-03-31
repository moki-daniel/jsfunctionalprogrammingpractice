const companies = [
    {
        name: "thaSmartLabs",
        category: "IT and support",
        DateOfRegistration: 12/15/2022,
        Employees: 20,
        businessType: "Service",

    },
    {
        name: "thaSmartBoda",
        category: "Travel",
        DateOfRegistration: 12/15/2021,
        Employees: 100,
        businessType: "Product and Service",

    },
    {
        name: "thaSmartBiz",
        category: "Ecommerce",
        DateOfRegistration: 12/15/2020,
        Employees: 50,
        businessType: "Service",

    },
    {
        name: "thaSmartLoan",
        category: "Finance",
        DateOfRegistration: 12/15/2013,
        Employees: 20,
        businessType: "Service",

    },
    {
        name: "thaSmartLearn",
        category: "Learning",
        DateOfRegistration: 12/15/2011,
        Employees: 15,
        businessType: "Products and Service",

    },
    {
        name: "thaSmartBeauty",
        category: "Beauty",
        DateOfRegistration: 12/15/2012,
        Employees: 3,
        businessType: "Products and Service",

    },
]
const companyOfferProductsandService = companies.filter((company) => {
    if(company.businessType === "Products and Service") {
        return true
    }
});
console.log(companyOfferProductsandService);