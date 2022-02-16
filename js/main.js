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
                                                    ultimoAccesso: null,
                                                },
                                                {
                                                    date: '10/01/2020 15:50:00',
                                                    text: 'Ricordati di dargli da mangiare',
                                                    status: 'sent',
                                                    ultimoAccesso: null,
                                                },
                                                {
                                                    date: '10/01/2020 16:15:22',
                                                    text: 'Tutto fatto!',
                                                    status: 'received',
                                                    ultimoAccesso: null,
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
                                                    ultimoAccesso: null,
                                                },
                                                {
                                                    date: '20/03/2020 16:30:55',
                                                    text: 'Bene grazie! Stasera ci vediamo?',
                                                    status: 'received',
                                                    ultimoAccesso: null,
                                                },
                                                {
                                                    date: '20/03/2020 16:35:00',
                                                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                                    status: 'sent',
                                                    ultimoAccesso: null,
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
                                                    ultimoAccesso: null,
                                                },
                                                {
                                                    date: '28/03/2020 10:20:10',
                                                    text: 'Sicuro di non aver sbagliato chat?',
                                                    status: 'sent',
                                                    ultimoAccesso: null,
                                                },
                                                {
                                                    date: '28/03/2020 16:15:22',
                                                    text: 'Ah scusa!',
                                                    status: 'received',
                                                    ultimoAccesso: null,
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
                                                    status: 'sent',
                                                    ultimoAccesso: null,
                                                },
                                                {
                                                    date: '10/01/2020 15:50:00',
                                                    text: 'Si, ma preferirei andare al cinema',
                                                    status: 'received',
                                                    ultimoAccesso: null,
                                                }
                                            ],
                            },
                        ],

            indexContactAttivo: 0, //set primo contatto di contacts attivo e chat visualizzata nella pagina
            textSend: "",
            search: "", 
        },
        
       
        
        methods:{

            random(min, max) {
                //funzione che genera numero random tra max e min inclusi
                return Math.floor(Math.random() * (max - min + 1) + min); 
            },

            setContactAttivo(indice){
                this.indexContactAttivo = indice;

                //simulo contatto online, ATTENZIONE valido solo se non si stressa il sistema cliccando sull'utente quando già è online

                    //creo variabile con ultimo accesso e poi sovrascrivo il valore della proprietà ultimoAccesso con "online"
                    let ultimoAccesso = this.contacts[indice].messages[this.contacts[indice].messages.length -1].ultimoAccesso;
                    this.contacts[indice].messages[this.contacts[indice].messages.length -1].ultimoAccesso = "online"

                    //genero numero random per il tempo di online dell'utente compreso tra 1000 e 8000 che saranno usati per un tempo di 1s a 8s
                    const random = this.random(1000,8000);

                    // imposto un setTimeout() dopo il quale il contatto non è più online 
                    setTimeout(() => {
                        
                        //creo variabili locali con riferimento a contacts[indice].messages[ultimaPosizione].ultimoAccesso
                        let variabileLocaleOnline = this.contacts[indice].messages[this.contacts[indice].messages.length -1].ultimoAccesso;

                        // creo variabile locale data in base al contenuto di ultimoAccesso, 
                        //solo la prima volta sarà null e prelevo l'informazione sulla data di partenza dalla data dell'ultimo messaggio 
                        //dopo aggiorno il valore dell'ultimoAccesso
                        let data;
                        if(ultimoAccesso == null){
                            data = dayjs().format("DD-MM-YYYY HH:mm:ss");
                        }else{
                            data = ultimoAccesso;
                        } 
                       
                        //Converto la stringa data in un data DD-MM-YYYY HH:mm:ss, di default la conversione è MM-DD-YYYY
                        data = dayjs(data, "DD-MM-YYYY HH:mm:ss");

                        //aggiungo secondi alla data di ultimo messaggio
                        data = dayjs(data).add(random, 'ms');


                        //assegno il valore di data modificato all avariabile locale
                        variabileLocaleOnline =  data;

                        //setto variabileLocaleOnline con il sistema di date utilizzato in tutto questo codice
                        variabileLocaleOnline = dayjs(variabileLocaleOnline).format('DD/MM/YYYY [ore:] HH:mm:ss');

                        //assegno il valore di variabileLocaleOnline alla posizione e al contatto opportuno
                        this.contacts[indice].messages[this.contacts[indice].messages.length -1].ultimoAccesso = variabileLocaleOnline;        
                        
                    }, random);
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
                                                                ultimoAccesso: dayjs().format('DD/MM/YYYY [ore:] HH:mm:ss'),
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