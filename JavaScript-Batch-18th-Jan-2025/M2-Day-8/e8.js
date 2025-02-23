//Example-8 using class, objects, functions,constructors, variables and Inheritance Concepts

//Example 5: Media Library System

// Base class
class Media {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }

    displayInfo() {
        return `${this.title} (${this.year})`;
    }
}

// Subclass for Book
class Book extends Media {
    constructor(title, year, author) {
        super(title, year);
        this.author = author;
    }

    displayInfo() {
        return `${super.displayInfo()} - Author: ${this.author}`;
    }
}

// Subclass for Movie
class Movie extends Media {
    constructor(title, year, director) {
        super(title, year);
        this.director = director;
    }

    displayInfo() {
        return `${super.displayInfo()} - Director: ${this.director}`;
    }
}

// Usage
const book = new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald");
const movie = new Movie("Inception", 2010, "Christopher Nolan");

console.log(book.displayInfo()); // Output: The Great Gatsby (1925) - Author: F. Scott Fitzgerald
console.log(movie.displayInfo()); // Output: Inception (2010) - Director: Christopher Nolan