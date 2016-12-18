/**
 * Created by kfrei on 17/12/16.
 */

var select2Component = Vue.extend({
    //v-el:select
    template: '<select v-el:select><option v-for="item in items" value="{{item.st}}">{{item.study}}</option></select>',
    props: {
        value: "",
        items: []
    },

    ready: function() {
        var select = $(this.$els.select);

        select.selectpicker("val", this.value);
        var self = this;
        select.on("changed.bs.select", function() {
            self.value = select.selectpicker("val");
        });
    }
});


Vue.component('b-select', select2Component);

new Vue({
    el: '#app',

    data: {
        items: [
            {st: 1, study: 'Physics'},
            {st: 2, study: 'Maths'},
            {st: 3, study: 'Chemistry'}
        ],

        value: "2"
    }

});

