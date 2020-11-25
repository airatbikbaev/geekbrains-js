'use strict';

// #1

for (let i = 0; i <= 10; i++) {
    const text = i === 0 ? 'это ноль' : i % 2 === 0 ? 'четное число' : 'нечетное число';

    console.log(`${i} - ${text}`);
}


// #2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


// #3

const productsA = [
    {
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000
    }
];

const productsWithSale = productsA.map(product => ({...product, price: product.price * 0.85}));


// #4

const productsB = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithPhoto = productsB.filter(({photos}) => photos && photos.length);

const sortedProducts = [...productsB].sort((a, b) => {
    return a.price > b.price ? 1 : -1;
});


// #5

for (let i = 0; i < 10; console.log(i), i++) {}


// #6

for (let i = 0, text = '#'; i < 20; i++) {
    console.log(text);

    text += '#';
}

