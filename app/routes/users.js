module.exports = [
    { 
        method: 'GET', 
        path: '/user/', 
        handler: (request, reply) => {
            //To Do: Implementation goes here
        },
        config:{
            desciption: "",
            notes: "",
            tags:[]
        }
    },
    { 
        method: 'GET', 
        path: '/user/detail/{id}', 
        handler: (request, reply) => {
            //To Do: Implementation goes here
        },
        config:{
            desciption: "",
            notes: "",
            tags:[]
        }
    },
    { method: 'POST', 
      path: '/user/store', 
      handler: (request, reply) => {
        //To Do: Implementation goes here
      },
      config:{
            desciption: "",
            notes: "",
            tags:[]
        }
    },
    { 
      method: 'PUT', 
      path: '/user/update/', 
      handler: (request, reply) => {
        //To Do: Implementation goes here
      },
      config:{
            desciption: "",
            notes: "",
            tags:[]
        } 
    },
    { 
      method: 'DELETE', 
      path: '/user/destroy/{id}', 
      handler: (request, reply) => {
        //To Do: Implementation goes here
      },
      config:{
            desciption: "",
            notes: "",
            tags:[]
        }
    }
];