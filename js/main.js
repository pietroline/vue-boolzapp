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
                                                    status: 'sent',
                                                    ultimoAccesso: '11/01/2020 16:34:55',
                                                    options: false,
                                                    corsivo: false,
                                                },
                                                {
                                                    date: '10/01/2020 15:50:00',
                                                    text: 'Ricordati di dargli da mangiare',
                                                    status: 'sent',
                                                    ultimoAccesso: '10/01/2020 18:20:00',
                                                    options: false,
                                                },
                                                {
                                                    date: '10/01/2020 16:15:22',
                                                    text: 'Tutto fatto!',
                                                    status: 'received',
                                                    ultimoAccesso: '11/01/2020 22:18:46',
                                                    options: false,
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
                                                    status: 'sent',
                                                    ultimoAccesso: '21/03/2020 17:31:00',
                                                    options: false,
                                                },
                                                {
                                                    date: '20/03/2020 16:30:55',
                                                    text: 'Bene grazie! Stasera ci vediamo?',
                                                    status: 'received',
                                                    ultimoAccesso: '20/03/2020 18:38:55',
                                                    options: false,
                                                },
                                                {
                                                    date: '20/03/2020 16:35:00',
                                                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                                    status: 'sent',
                                                    ultimoAccesso: '20/03/2020 17:10:22',
                                                    options: false,
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
                                                    status: 'received',
                                                    ultimoAccesso: '28/03/2020 10:17:40',
                                                    options: false,
                                                },
                                                {
                                                    date: '28/03/2020 10:20:10',
                                                    text: 'Sicuro di non aver sbagliato chat?',
                                                    status: 'sent',
                                                    ultimoAccesso: "28/03/2020 12:25:10",
                                                    options: false,
                                                },
                                                {
                                                    date: '28/03/2020 16:15:22',
                                                    text: 'Ah scusa!',
                                                    status: 'received',
                                                    ultimoAccesso: '28/03/2020 19:41:35',
                                                    options: false,
                                                }
                                            ],
                            },

                            {
                                name: 'Luisa',
                                avatar: '_4',
                                visible: true,
                                messages:   [
                                                {
                                                    date: '13/05/2020 15:30:55',
                                                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                                                    status: 'sent',
                                                    ultimoAccesso: '15/01/2020 19:40:55',
                                                    options: false,
                                                },
                                                {
                                                    date: '10/01/2020 15:50:00',
                                                    text: 'Si, ma preferirei andare al cinema',
                                                    status: 'received',
                                                    ultimoAccesso:'11/01/2020 20:56:17',
                                                    options: false,
                                                }
                                            ],
                            },
                            {
                                name: 'Silvio',
                                avatar: '_5',
                                visible: true,
                                messages:   [
                                                {
                                                    date: '21/09/2020 9:14:55',
                                                    text: 'Andiamo al supermercato?',
                                                    status: 'sent',
                                                    ultimoAccesso: '15/01/2020 19:40:55',
                                                    options: false,
                                                },
                                                {
                                                    date: '21/09/2020 9:30:00',
                                                    text: 'Si, passo a prenderti alle 18:00',
                                                    status: 'received',
                                                    ultimoAccesso:'11/01/2020 20:56:17',
                                                    options: false,
                                                }
                                            ],
                            },
                            {
                                name: 'Alessandra',
                                avatar: '_6',
                                visible: true,
                                messages:   [
                                                {
                                                    date: '25/08/2020 15:25:55',
                                                    text: 'Ho una gran fame!!',
                                                    status: 'sent',
                                                    ultimoAccesso: '15/01/2020 19:40:55',
                                                    options: false,
                                                },
                                                {
                                                    date: '25/08/2020 15:27:00',
                                                    text: 'Andiamo da Jhonny panino? 😋',
                                                    status: 'received',
                                                    ultimoAccesso:'11/01/2020 20:56:17',
                                                    options: false,
                                                },
                                                {
                                                    date: '25/08/2020 15:35:55',
                                                    text: 'Siiiiii',
                                                    status: 'sent',
                                                    ultimoAccesso: '15/01/2020 19:40:55',
                                                    options: false,
                                                },
                                            ],
                            },
                            {
                                name: 'Francesco',
                                avatar: '_7',
                                visible: true,
                                messages:   [
                                                {
                                                    date: '23/09/2020 18:42:55',
                                                    text: 'Stasera usciamo?',
                                                    status: 'sent',
                                                    ultimoAccesso: '15/01/2020 19:40:55',
                                                    options: false,
                                                },
                                                {
                                                    date: '23/09/2020 18:50:00',
                                                    text: 'Si, ma non torniamo tardi che domani sono impegnato 😪',
                                                    status: 'received',
                                                    ultimoAccesso:'11/01/2020 20:56:17',
                                                    options: false,
                                                },
                                                {
                                                    date: '23/09/2020 18:42:55',
                                                    text: 'Tranquillo anche io',
                                                    status: 'sent',
                                                    ultimoAccesso: '15/01/2020 19:40:55',
                                                    options: false,
                                                },
                                            ],
                            },
                            {
                                name: 'Mario',
                                avatar: '_8',
                                visible: true,
                                messages:   [
                                                {
                                                    date: '19/10/2020 8:30:55',
                                                    text: 'Buongiorno!! Hai visto l\'ultimo film al cinema? 🎥',
                                                    status: 'sent',
                                                    ultimoAccesso: '15/01/2020 19:40:55',
                                                    options: false,
                                                },
                                                {
                                                    date: '19/10/2020 8:50:00',
                                                    text: 'No, potremmo andarci insieme nel fine settimana',
                                                    status: 'received',
                                                    ultimoAccesso:'11/01/2020 20:56:17',
                                                    options: false,
                                                },
                                                {
                                                    date: '19/10/2020 9:15:55',
                                                    text: 'Fantasticoooo!!!!',
                                                    status: 'sent',
                                                    ultimoAccesso: '15/01/2020 19:40:55',
                                                    options: false,
                                                },

                                            ],
                            },
                        ],

            indexContactAttivo: 0, //set primo contatto di contacts attivo e chat visualizzata nella pagina
            textSend: "",
            search: "",
            icons: false, 
        },
        
       
        
        methods:{

            random(min, max) {
                //funzione che genera numero random tra max e min inclusi
                return Math.floor(Math.random() * (max - min + 1) + min); 
            },

            setContactAttivo(indice){
                this.indexContactAttivo = indice;

                //simulo contatto online

                    //aggiorno la chiave della proprietà ultimoAccesso con "online"
                    this.contacts[indice].messages[this.contacts[indice].messages.length -1].ultimoAccesso = "online"

                    //genero numero random per il tempo di online dell'utente compreso tra 1000 e 8000 che saranno usati per un tempo di 1s a 8s
                    const random = this.random(1000,8000);

                    // imposto un setTimeout() dopo il quale il contatto non è più online 
                    setTimeout(() => {
            
                        // creo variabile locale con la data odierna, il typeof è stringa
                        let data = dayjs().format("DD-MM-YYYY HH:mm:ss");
                       
                        //Converto la stringa "data" in un oggetto specificando (istruendolo) DD-MM-YYYY HH:mm:ss, 
                        //se non specificassi il DD-MM-YYYY HH:mm:ss, di default il metodo "add()"
                        //interpreterebbe la stringa come MM-DD-YYYY HH:mm:ss
                        data = dayjs(data, "DD-MM-YYYY HH:mm:ss");

                        //aggiungo secondi alla data di accesso per ottenere la data di uscita (simulazione uscita dell'utente)
                        data = dayjs(data).add(random, 'ms');

                        // riconverto l'oggetto "data" in una stringa con il formato DD/MM/YYYY
                        data = dayjs(data).format('DD/MM/YYYY HH:mm:ss');

                        //assegno il valore della stringa data alla posizione e al contatto opportuno
                        this.contacts[indice].messages[this.contacts[indice].messages.length -1].ultimoAccesso = data;     
                        
                    }, random);
            },

            sendMessage(){

                if(this.textSend != ""){
                    const message = {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: this.textSend,
                        status: 'sent',
                    };

                    this.textSend = "";
                    this.contacts[this.indexContactAttivo].messages.push(message); 

                    //simulo risposta con ok
                    setTimeout(() => {
                        this.contacts[this.indexContactAttivo].messages.push (
                                                            {
                                                                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                                                                text: "ok",
                                                                status: 'received',
                                                                ultimoAccesso: dayjs().format('DD/MM/YYYYs HH:mm:ss'),
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
                
                
            },

            drawsOptions(indice){
                this.contacts[this.indexContactAttivo].messages[indice].options = !this.contacts[this.indexContactAttivo].messages[indice].options;
            },

            infoText(){

            },

            deleteText(indice){
                this.contacts[this.indexContactAttivo].messages[indice].text = "Questo messaggio è stato eliminato";
                this.contacts[this.indexContactAttivo].messages[indice].corsivo = true;
                this.drawsOptions(indice);
            },

            deleteRemoveText(indice){
                this.contacts[this.indexContactAttivo].messages.splice(indice,1);
            },

            viewIcons(){
                this.icons = !this.icons;
            },

            addEmoji(emoji){
                this.textSend += emoji; 
            }

        }
    
    }
);