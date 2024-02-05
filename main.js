const { createApp } = Vue


createApp({
    data() {
        return {
            generatedMails : [],
        }
    },
    created() {
        
    },
    methods: {
        generaListaMail(){

            this.generatedMails = []
            for (let i=0; i<10; i++){


                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then( ( result ) => {
                    this.generatedMails.push(result.data.response)
                    console.log(result.data.response)
                }
                )
            }
            console.log(this.generatedMails)
        }
        
    }

}).mount('#app')

/* API
https://flynn.boolean.careers/exercises/api/random/mail */