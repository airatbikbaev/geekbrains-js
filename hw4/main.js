'use strict';

// #1.1

function Product(name, price) {
    this.name = name;
    this.price = price;
}

/*
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
*/

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
};


// #1.2 (a)

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;

    this.edit = function (text) {
        this.text = text;
    }
}

/*
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit (text) {
        this.text = text;
    }
}
*/


// 1.2 (b)

function AttachedPost(author, text, date) {
    Post.apply(this, arguments);

    this.highlighted = false;
    this.makeTextHighlighted = function () {
        this.highlighted = true;
    }
}

/*
class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}
*/
