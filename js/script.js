const { createApp } = Vue;

createApp({
    data(){
        return{
            search: '',
            empty_chat: true,
            newText: '',
            messageClicked: { 
                index: null,
                show: false
            },
            currentContact: { },
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '10/01/2020 16:15',
                            message: 'Tutto fatto!',
                            status: 'received',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '20/03/2020 16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            show: false
                        },
                        {
                            date: '20/03/2020 16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            show: false
                        },
                        {
                            date: '28/03/2020 10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '28/03/2020 16:15',
                            message: 'Ah scusa!',
                            status: 'received',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Non ancora',
                            status: 'received',
                            show: false
                        },
                        {
                            date: '10/01/2020 15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            show: false
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '10/01/2020 15:51',
                            message: 'OK!!',
                            status: 'received',
                            show: false
                        }
                    ],
                }
            ]
            
        }
    },
    methods: {
        openContact(i){
            this.empty_chat = false;
            this.currentContact = this.contacts[i];
            this.currentContact.settings = false;
            this.currentContact.id = i;
        },
        viewLastAccess(){
            /* let string = `${this.newDate().data} ${this.newDate().time}` */
            let last_access;
            this.currentContact.messages.forEach(element => {
                if (element.status == 'received') {
                    last_access = `Ultimo accesso : ${element.date}`;
                }
            });
            
            return last_access ;

        },
        newDate(){
            let dt = luxon.DateTime.now();
             let data = `${dt.year}/${dt.month}/${dt.day}`; 
            let time = `${dt.hour}:${dt.minute}`;
            let Date = {
                data : data,
                time : time
            }
            /* let result = `${data} ${time}`; */
            return Date;
        },
        generateMessage(){
            const risposte = ['Ok', 'Ciao', 'Come stai?', 'Sono impegnato...'];
            let i = Math.floor(Math.random()* risposte.length);
            return risposte[i];
        },
        sendNewMessage(){
            let newMessage = this.newText;
            let date = this.newDate().time;
            let obj = {
                date : date,
                message : newMessage,
                status: 'sent',
                show : false
            }
            let risposta = {
                date : '',
                message : this.generateMessage(),
                status: 'received',
                show : false
            }
            this.currentContact.messages.push(obj);
            this.currentContact.doing = 'Sta scrivendo...';
            setTimeout(()=> {
                risposta.date = this.newDate().time;
                this.currentContact.messages.push(risposta);
                this.currentContact.doing = null;
              }, 2000);
            this.newText = '';
        },
        searchContact(){
            this.contacts.forEach(element => {
                if (element.name.toLowerCase().includes(this.search.toLowerCase())) {
                    element.visible = true;
                }else{
                    element.visible = false;
                }
            });
        },
        lastText(i){
            let lastMessage;
            this.contacts[i].messages.forEach(element => {
                if (element.status == 'received') {
                    lastMessage = element.message;
                }
            });
            return lastMessage;
        },
        lastTextDate(i){
            let lastDate;
            this.contacts[i].messages.forEach(element =>{
                if(element.status == 'received'){
                    lastDate = element.date;
                }
            });
            return lastDate;
        },
        dropdownClick(i){
            this.currentContact.messages[i].show = !this.currentContact.messages[i].show;
            let j = this.messageClicked.index;
            if ( j != null && j != i) {
                this.currentContact.messages[j].show = false;
            }
            this.messageClicked.index = i;
            
            
        },
        deleteMessage(){
            let i = this.messageClicked.index;
            this.currentContact.messages.splice(i,1);
            this.messageClicked.index = null;
        },
        deleteChat(){
            this.currentContact.messages = [];
        },
        deleteContact(){
            let i = this.currentContact.id;
            this.contacts.splice(i, 1);
            this.openContact(0);
        }

    }
}).mount('#app');