/**
 * Created by kfrei on 17/9/16.
 */

'use strict';

angular.module('kfreiApp')

    .factory ('menuFactory', function() {

        var menufac = {};
        var dishes=[
            {name: 'Uthapizza', image:'images/uthapizza.png', label:'Hot',price:'4.99' ,
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolor ad nostrum deserunt, nobis similique quas atque vel, excepturi. Quaerat animi adipisci dignissimos quasi est maxime, ipsum ducimus, voluptatem soluta.',
                comment: '', category:'mains'},
            {name: 'Zucchipakoda', image:'images/zucchipakoda.png', label:'New',price:'3.99' ,
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolor ad nostrum deserunt, nobis similique quas atque vel, excepturi.',
                comment: '', category:'appetizers'},
            {name: 'Elai Cheesecake', image:'images/ElaiCheesecake.png', label:'Trend',price:'2.59' ,
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolor ad nostrum deserunt, nobis similique quas atque vel, excepturi. Quaerat animi adipisci dignissimos quasi est maxime, ipsum ducimus, voluptatem soluta.',
                comment: '', category:'deserts'},
            {name: 'Vadonut', image:'images/vadonut.png', label:'New',price:'1.59' ,
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolor ad nostrum deserunt, nobis similique quas atque vel, excepturi.',
                comment: '', category:'deserts'},
        ];


        var dish={
            name:'Uthapizza',
            image: 'images/uthapizza.png',
            category: 'mains',
            label:'Hot',
            price:'4.99',
            description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
            comments: [
                {
                    rating:5,
                    comment:"Imagine all the eatables, living in conFusion!",
                    author:"John Lemon",
                    date:"2012-10-16T17:57:28.556094Z"
                },
                {
                    rating:4,
                    comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                    author:"Paul McVites",
                    date:"2014-09-05T17:57:28.556094Z"
                },
                {
                    rating:3,
                    comment:"Eat it, just eat it!",
                    author:"Michael Jaikishan",
                    date:"2015-02-13T17:57:28.556094Z"
                },
                {
                    rating:4,
                    comment:"Ultimate, Reaching for the stars!",
                    author:"Ringo Starry",
                    date:"2013-12-02T17:57:28.556094Z"
                },
                {
                    rating:2,
                    comment:"It's your birthday, we're gonna party!",
                    author:"25 Cent",
                    date:"2011-12-02T17:57:28.556094Z"
                }

            ]
        };



        menufac.getDishes = function(){
            return dishes;
        };

        menufac.getDish = function(index){
            return dishes[index];
        };

        menufac.getmyDish = function(){
            return dish;
        };

        return menufac;


    });



/*

 .service ('menuFactory', function() {

 var dishes=[
 {name: 'Uthapizza', image:'images/uthapizza.png', label:'Hot',price:'4.99' ,
 description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolor ad nostrum deserunt, nobis similique quas atque vel, excepturi. Quaerat animi adipisci dignissimos quasi est maxime, ipsum ducimus, voluptatem soluta.',
 comment: '', category:'mains'},
 {name: 'Zucchipakoda', image:'images/zucchipakoda.png', label:'New',price:'3.99' ,
 description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolor ad nostrum deserunt, nobis similique quas atque vel, excepturi.',
 comment: '', category:'appetizers'},
 {name: 'Elai Cheesecake', image:'images/ElaiCheesecake.png', label:'Trend',price:'2.59' ,
 description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolor ad nostrum deserunt, nobis similique quas atque vel, excepturi. Quaerat animi adipisci dignissimos quasi est maxime, ipsum ducimus, voluptatem soluta.',
 comment: '', category:'deserts'},
 {name: 'Vadonut', image:'images/vadonut.png', label:'New',price:'1.59' ,
 description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolor ad nostrum deserunt, nobis similique quas atque vel, excepturi.',
 comment: '', category:'deserts'},
 ];


 this.getDishes = function(){
 return dishes;
 };

 this.getDish = function(index){
 return dishes[index];
 };


 });

 */