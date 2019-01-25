// const h1 =  document.querySelector("h1");
// const input =  document.querySelector("input");

// document.addEventListener("keyup",function(){
//     h1.innerHTML =  input.value
// })







Vue.filter("siONo",function(valor){
        return valor? "Sí": "No"
})

Vue.filter("minuscula",function(valor){
    return valor.toLowerCase();
})

Vue.filter("reverso",function(valor){
    return valor.split('').reverse().join('');
})

Vue.filter('filtroNombre', function(nombre){
    return `${nombre.title} ${nombre.first} ${nombre.last}`;
})

// var vm1 = new Vue({
//     el:'#app1',
//     data:{
//         mensaje:"Soy la primera instancia"
//     },
//     methods: {
//         cambiarValor: function(){
//             this.mensaje = "Cambié";
//             vm2.mensaje = "El valor ha sido cambiado desde la instancia 1"
//         }
//     },
//     updated:function(){
//         console.log("El valor del modelo ha cambiado");
//     }
// })

var vm2 = new Vue({
    el:'#app2',
    data:{
        mensaje:"Soy la segunda instancia",
        personas:[]
    },
    mounted:function(){
        axios.get("https://randomuser.me/api/?results=500").then(response =>{
                this.personas = response.data.results
        }).catch(error=>{
            console.error("Error fatal");
        })
    }
})



var vm = new Vue({
        el:'main',
        data:{
            mensaje:"Hola con Vue Js",
            conectado:true,
            edad: 11,
            mesNuevo: '',
            meses: ['enero', 'febrero','marzo','abril','mayo','junio,','julio','agosto','septiembre'],
            personas: [
                {
                    nombre:'Luis Manuel',
                    edad: 20,
                    registrado:false
                },
                {
                    nombre:'Mario Martinez',
                    edad: 13,
                    registrado:true
                },
                {
                    nombre:'Stanley Lara',
                    edad: 37,
                    registrado:false
                },
                {
                    nombre:'Emmanuel Jimenez',
                    edad: 23,
                    registrado:true
                }
             ]
            
        },
        methods:{
            agregarMes:function(){
                this.meses.push(this.mesNuevo);
                this.mesNuevo = null;
                // console.log("Agregar Mes Metodo");
            },
            intercambiarValor:function(persona){
                persona.registrado = !persona.registrado
            }
        },
        computed:{
            mensajeReverso:function(){
                return this.mensaje.split('').reverse().join('');
            },
            mayoresEdad:function(){
                return this.personas.filter(x=>x.edad > 18);
            },
            registrados:function(){
                return this.personas.filter(x=>x.registrado);
            }
        }
})
