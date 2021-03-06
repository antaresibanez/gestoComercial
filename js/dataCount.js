//Propiedades
var p = {
    dateCancel: document.getElementById("dateCancel"),
    dateExpire: document.getElementById("dateExpire"),
    priceOld: document.getElementById("priceOld"),
    priceNew: document.getElementById("priceOld"),
    submit: document.getElementById("btnCalc"),
    compensar: 0,
    fechas: document.querySelectorAll("input.validar"),
    expresionRegular: null
}

//métodos

var m = {

    inicioForm: function(){
       p.submit.addEventListener("click", m.calcular);
    },    

    calcular: function(){
        cancel = new Date(dateCancel.value);
        expire = new Date(dateExpire.value);
        sinDisfrutar = (expire - cancel)/86400000;
        p.compensar = sinDisfrutar * (priceOld.value/30) / (priceNew.value/30);
        
        p.expresionRegular = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;

        if(!p.expresionRegular.test(dateCancel.value) || !p.expresionRegular.test(dateExpire.value)){
            alert("Debes ingresar correctamente las fechas = YYYY-MM-dd")        
        }if (p.priceOld.value == "" || p.priceNew == "") {
            alert("Debes ingresar correctamente los precios")
        } else {
            alert("Se le tienen que compensar: "+ p.compensar+" días");
        }    
    }

}
m.inicioForm();






