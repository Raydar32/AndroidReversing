setImmediate(function(){
    console.log("Avvio dell'hook");
    Java.perform(function(){
        var system = Java.use("sg.vantagepoint.uncrackable2.MainActivity");
        system.a.overload("java.lang.String").implementation=function(var0){
            console.log("Uscita dall'applicazione");
        }
    });
});
