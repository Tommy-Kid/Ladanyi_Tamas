function osszesOszto(param) {
    var oszto = [];
    for (var i = 1; i <= param; i++) {
        if (param % i == 0) {
            oszto.push(i);
        }
    }
    return oszto;
}
function parosDarab(param) {
    var eredmeny = 0;
    for (var i = 0; i < param.length; i++) {
        if (param[i] % 2 == 0) {
            eredmeny++;
        }
    }
    return eredmeny;
}
function fuggvenyhivasPalindrom(paramfunction) {
    var paramszoveg = paramfunction();
    var spaceNelkuliSzoveg = paramszoveg.replace(/\s/g, "");
    var visszafele = spaceNelkuliSzoveg.split("").reverse().join("");
    console.log(spaceNelkuliSzoveg);
    console.log(visszafele);
    return spaceNelkuliSzoveg === visszafele;
}
