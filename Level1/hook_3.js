setImmediate(function(){
    console.log("Avvio dell'hook");
    Java.perform(function(){
        var main_Activity = Java.use("sg.vantagepoint.uncrackable1.MainActivity$1");
        main_Activity.onClick.implementation=function(){
            console.log("Override del metodo onClick della mainClass");           
        }
    });   
});
