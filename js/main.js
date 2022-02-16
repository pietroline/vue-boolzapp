const vue = new Vue(
    {   
        el: "#app",
        data:{
            contacts:   [
                            {
                                name: 'Michela',
                                avatar: '_1',
                                visible: true,
                                messages:   [
                                                {
                                                    date: '10/01/2020 ore: 15:30:55',
                                                    text: 'Hai portato a spasso il cane?',
                                                    status: 'sent'
                                                },
                                                {
                                                    date: '10/01/2020 ore: 15:50:00',
                                                    text: 'Ricordati di dargli da mangiare',
                                                    status: 'sent'
                                                },
                                                {
                                                    date: '10/01/2020 ore: 16:15:22',
                                                    text: 'Tutto fatto!',
                                                    status: 'received'
                                                }
                                            ],
                            },

                            {
                                name: 'Fabio',
                                avatar: '_2',
                                visible: true,
                                messages:   [
                                                {
                                                    date: '20/03/2020 ore: 16:30:00',
                                                    text: 'Ciao come stai?',
                                                    status: 'sent'
                                                },
                                                {
                                                    date: '20/03/2020 ore: 16:30:55',
                                                    text: 'Bene grazie! Stasera ci vediamo?',
                                                    status: 'received'
                                                },
                                                {
                                                    date: '20/03/2020 ore: 16:35:00',
                                                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                                    status: 'sent'
                                                }
                                            ],
                                },

                            {
                                name: 'Samuele',
                                avatar: '_3',
                                visible: true,
                                messages:   [
                                                {
                                                    date: '28/03/2020 ore: 10:10:40',
                                                    text: 'La Marianna va in campagna',
                                                    status: 'received'
                                                },
                                                {
                                                    date: '28/03/2020 ore: 10:20:10',
                                                    text: 'Sicuro di non aver sbagliato chat?',
                                                    status: 'sent'
                                                },
                                                {
                                                    date: '28/03/2020 ore: 16:15:22',
                                                    text: 'Ah scusa!',
                                                    status: 'received'
                                                }
                                            ],
                            },

                            {
                                name: 'Luisa',
                                avatar: '_4',
                                visible: true,
                                messages:   [
                                                {
                                                    date: '10/01/2020 ore: 15:30:55',
                                                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                                                    status: 'sent'
                                                },
                                                {
                                                    date: '10/01/2020 ore: 15:50:00',
                                                    text: 'Si, ma preferirei andare al cinema',
                                                    status: 'received'
                                                }
                                            ],
                            },
                        ],

            indexContactAttivo: 0,
            textSend: "",
            search: "", 
        },
        
        methods:{

            setContactAttivo(indice){
                this.indexContactAttivo = indice;
            },

            sendMessage(){

                if(this.textSend != ""){
                    const message = {
                        date: dayjs().format('DD/MM/YYYY [ore:] HH:mm:ss'),
                        text: this.textSend,
                        status: 'sent',
                    };

                    this.textSend = "";
                    this.contacts[this.indexContactAttivo].messages.push(message); 

                    //simulo risposta con ok
                    setTimeout(() => {
                        this.contacts[this.indexContactAttivo].messages.push (
                                                            {
                                                                date: dayjs().format('DD/MM/YYYY [ore:] HH:mm:ss'),
                                                                text: "ok",
                                                                status: 'received',
                                                            }
                                                        );
                    }, 1000);
                }
                
            },

            userSearch(){

                let inserito = this.search.toLowerCase();

                this.contacts.forEach(element => {

                    let nomeUtente = element.name.toLowerCase();
                    element.visible = !nomeUtente.includes(inserito) ? false:true
                    
                });
                
                
            }
        }
    
    }
);