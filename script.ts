function osszesOszto(param:number):number[]{
    var oszto : number[] =[];

    for(var i:number=1; i<=param; i++){
        if(param%i==0){
            oszto.push(i);
        }
    }
    return oszto;
}

function parosDarab(param:number[]):number{
    var eredmeny:number = 0;

    for(var i:number=0; i<param.length; i++){
        if(param[i]%2==0){eredmeny++;}
    }

    return eredmeny;
}

function fuggvenyhivasPalindrom(paramfunction: () => string):boolean{
    var paramszoveg: string = paramfunction();
    var spaceNelkuliSzoveg:string = paramszoveg.replace(/\s/g, "");
    var visszafele:string = spaceNelkuliSzoveg.split("").reverse().join("");
    console.log(spaceNelkuliSzoveg);
    console.log(visszafele);


    return spaceNelkuliSzoveg === visszafele;

}