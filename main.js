// Attraverso una chiamata ajax all’Api di boolean 
// avremo a disposizione una decina di dischi musicali. 
// Servendoci di Vue JS stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. 
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.

let app = new Vue({ 
	el: '#app',
	
    data: {
		mDisks: [],
	},

	methods: {

		eMailArrayGeneartor: function(){
			axios.get('https://flynn.boolean.careers/exercises/api/array/music')
			.then(function(index){
				console.log(index.data.response);
				index.data.response.forEach(function(item) {
					app.mDisks.push(item);
				});
			})
        },
	},

	mounted(){
        this.eMailArrayGeneartor();
	}
})