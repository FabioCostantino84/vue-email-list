/* 
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue
createApp({
    data() {
        return {

            emailsGen:[],
        
                
        }
    },
    
    mounted(){
        //con for ciclo per generare 10 email
        for ( let index= 0; index < 10; index++){
        
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response =>{
            /* console.log(response);
            console.log(response.data);
            console.log(response.data.response);
            this.email = response.data.response;
            console.log(this.email); */

            //pusho le email generate nel mio array vuoto emailsGen
            this.emailsGen.push (response.data.response);
        })

    }
    },
    
}).mount('#app')



