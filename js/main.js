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
                                                    date: '10/01/2020 15:30:55',
                                                    text: 'Hai portato a spasso il cane?',
                                                    status: 'sent'
                                                },
                                                {
                                                    date: '10/01/2020 15:50:00',
                                                    text: 'Ricordati di dargli da mangiare',
                                                    status: 'sent'
                                                },
                                                {
                                                    date: '10/01/2020 16:15:22',
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
                                                    date: '20/03/2020 16:30:00',
                                                    text: 'Ciao come stai?',
                                                    status: 'sent'
                                                },
                                                {
                                                    date: '20/03/2020 16:30:55',
                                                    text: 'Bene grazie! Stasera ci vediamo?',
                                                    status: 'received'
                                                },
                                                {
                                                    date: '20/03/2020 16:35:00',
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
                                                    date: '28/03/2020 10:10:40',
                                                    text: 'La Marianna va in campagna',
                                                    status: 'received'
                                                },
                                                {
                                                    date: '28/03/2020 10:20:10',
                                                    text: 'Sicuro di non aver sbagliato chat?',
                                                    status: 'sent'
                                                },
                                                {
                                                    date: '28/03/2020 16:15:22',
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
                                                    date: '10/01/2020 15:30:55',
                                                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                                                    status: 'sent'
                                                },
                                                {
                                                    date: '10/01/2020 15:50:00',
                                                    text: 'Si, ma preferirei andare al cinema',
                                                    status: 'received'
                                                }
                                            ],
                            },
                        ],

            showContact: {
                name: 'Michela',
                avatar: '_1',
                visible: true,
                messages:   [
                                {
                                    date: '10/01/2020 15:30:55',
                                    text: 'Hai portato a spasso il cane?',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    text: 'Ricordati di dargli da mangiare',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 16:15:22',
                                    text: 'Tutto fatto!',
                                    status: 'received'
                                }
                            ],
            },

            textSend: "",
            search: "",
            indexConractAttivo: 0,
        },

        mounted: function () {
            this.$nextTick(function () {
              this.drawsContact(0);
            })
        },
        
        methods:{

            drawsContact(indice){
                this.showContact.name = this.contacts[indice].name; 
                this.showContact.avatar = this.contacts[indice].avatar;  
                this.showContact.visible = this.contacts[indice].visible;
                this.showContact.messages = this.contacts[indice].messages;  
                this.indexConractAttivo = indice;  
            },

            sendMessage(){

                if(this.textSend != ""){
                    const message = {
                        date: '10/01/2020 16:15:22',
                        text: this.textSend,
                        status: 'sent',
                    };

                    this.textSend = "";
                    this.showContact.messages.push(message); 

                    //simulo risposta con ok
                    setTimeout(() => {
                        this.showContact.messages.push (
                                                            {
                                                                date: '10/01/2020 16:15:22',
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