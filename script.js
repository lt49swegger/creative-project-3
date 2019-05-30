let app = new Vue({  
    el: '#app',
    data: {
        jokes:{},
        joke: '',
        name: '',
        id: 0, 
        randomNum: '',
        lastNum: ''       
    },
    methods:
    {
        addJoke()
        {
            if (!(this.id in this.jokes))
            Vue.set(app.jokes,this.id, new Array);
            console.log(this.name);
            console.log(this.joke);
            console.log(this.id);
            this.jokes[this.id].push({
                author: this.name,
                text: this.joke,
            })
            console.log(this.jokes);
            this.name = '';
            this.joke = '';
            this.id += 1;
        },
        showJoke()
        {
            this.lastNum = this.randomNum;

            while(this.lastNum === this.randomNum)
            {
            this.randomNum = Math.floor(Math.random()*this.id)
            console.log(this.randomNum);
            }
        }
    },
})