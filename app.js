console.log('Magic happens here , Vue.js');

const app = Vue.createApp({
    //data, function
    //template:'<h2>I am the Template</h2>'
    data() {
        return {
            showBooks: true,
            books:[
                {title: 'Name of the wind', author:'Patrick rothfuss', img:'assets/1.jpg', isFav: true},
                {title: 'The way of kings', author:'brandon sanderson', img:'assets/2.jpg', isFav: false},
                {title: 'The way of kings', author:'brandon sanderson', img:'assets/3.jpg', isFav: false},
                {title: 'The way of kings', author:'brandon sanderson', img:'assets/1.jpg', isFav: true},
            ],
            author: 'Brandon Sanderson',
            title: 'The Final Empire',
            age: 45,
            x: 0,
            y: 0,
            url: 'http://www.thenetninja.co.uk'
        }
    },
    methods: {
        differentTitle(title) {
            this.title = title;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(event,data) {
            console.log(event, event.type);
            if(data) {
                console.log('event data');
            }
        },
        handleMouseMove(event) {
            console.log(event.type, 'Type');
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        toggleEvent(event, item) {
            item.isFav = !item.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    } 
})

app.mount("#app")
