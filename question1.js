class Movie { 
    constructor(title,studio,rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating =rating;
    }
    
    printMovie(){
        return "The Movie " + this.title + "is produced by " +this.studio + "and is rated " + this.rating;
    }
    
    getPG(...arr){
        return arr.filter((ele,ind)=> {return ele.rating === 'PG'});
        
    }
    
}

let mov = new Movie("Casino Royale","Eon Productions","PG13");
console.log(mov.printMovie());

console.log(mov.getPG(new Movie("Casino Royale","Eon Productions","PG13"),new Movie("Quiet Place","Walt Disney Productions","PG"),new Movie("Terminator","Hollwood Productions","PG"),new Movie("Interstellar","Guvi Productions","PG")));
