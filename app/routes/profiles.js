module.exports = [
    { 
      method: 'GET', 
      path: '/profile/', 
      handler: (request, reply) => {
       //To Do: some logic goes here
      },
        config:{
            desciption: "",
            notes: "",
            tags:[]
        }
    },
    { 
        method: 'GET', 
        path: '/profile/detail/{id}', 
        handler: (request, reply) => {
         //To Do: Some logic goes here
        },
        config:{
            desciption: "",
            notes: "",
            tags:[]
        } 
    },
    {
     method: 'POST', 
     path: '/profile/store', 
     handler: (request, reply) => {
         //To Do: Some logic goes here
     },
     config:{
            desciption: "",
            notes: "",
            tags:[]
        } 
    },
    { 
      method: 'PUT', 
      path: '/profile/update/', 
      handler: (request, reply) => {
        //To Do: Some logic goes here
      },
      config:{
            desciption: "",
            notes: "",
            tags:[]
        } 
    },
    { 
        method: 'DELETE', 
        path: '/profile/destroy/{id}', 
        handler: (request, reply) => {
            //To Do: Some logic goes here
        },
        config:{
            desciption: "",
            notes: "",
            tags:[]
        } 
    }
];