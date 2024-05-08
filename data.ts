const date = new Date()

export const data = [
    {
        id: 1,
        name: 'apples',
        createdAt: new Date(date.getDate() + 2),
        price: 1.05,
        color: 'red',
        category: ['fruit', 'sale']
    },
    {
        id: 2,
        name: 'bananas',
        createdAt: new Date(date.getDate() + 3),
        price: 3.00,
        color: 'yellow',
        category: ['fruit', 'sale', 'tropical']
    },
    {
        id: 3,
        name: 'orange',
        createdAt: new Date(date.getDate() + 2),
        price: 1.50,
        color: 'orange',
        category: ['fruit', 'citrus', 'organic']
    },
    {
        id: 4,
        name: 'lemon',
        createdAt: new Date(date.getDate() + 5),
        price: .50,
        color: 'yellow',
        category: ['fruit', 'citrus', 'sale']
    },
    {
        id: 5,
        name: 'lime',
        createdAt: new Date(date.getDate() + 3),
        price: .25,
        color: 'green',
        category: ['fruit', 'citrus', 'tropical']
    },
    {
        id: 6,
        name: 'carrrot',
        createdAt: new Date(date.getDate() + 1),
        price: 1.00,
        color: 'orange',
        category: ['vegetable', 'organic']
    },
    {
        id: 7,
        name: 'potato',
        createdAt: new Date(date.getDate() + 1),
        price: 1.00,
        color: 'brown',
        category: ['vegetable', 'organic']
    },
    {
        id: 8,
        name: 'cabbage',
        createdAt: new Date(date.getDate() + 5),
        price: 2.00,
        color: 'green',
        category: ['vegetable', 'sale']
    },
    {
        id: 9,
        name: 'kiwi',
        createdAt: date,
        price: 2.00,
        color: 'green',
        category: ['fruit', 'tropical']
    },
    {
        id: 10,
        name: 'corn',
        createdAt: date,
        price: 3.00,
        color: 'yellow',
        category: ['vegetable', 'sale', 'organic']
    },
];