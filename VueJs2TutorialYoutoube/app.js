new Vue({
    el: '#vue-app',
    data: {
        name: 'Feelong',
        job: 'Pro',
        website: 'http://google.com',
        websiteTag: '<a href="http://www.daum.net">Daum</a><br>'
    },
    methods:{
        greet: function(){
            return 'Good morning';
        },
        greet2: function(time){
            return 'Good ' + time;
        },
        greet3: function(time){
            
            return 'Good ' + time + ' ' + this.name;
        }
    }
});