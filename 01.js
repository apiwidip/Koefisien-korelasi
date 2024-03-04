const independen = [20,30,40,50,60,70];
const dependen = [4.1,6.2,8.3,10.1,12.4,14.5];

console.log(`© 2023 All Night (AWP), all rights reserved. Made with ❤️ for all.`);


function Xbar(independen){
    var n = 0;
    for(i = 0; i < independen.length; i++){
        n += independen[i];
    } return n;
}

function Ybar(dependen){
    var n = 0;
    for(i = 0; i < dependen.length; i++){
        n += dependen[i];
    } return n;
}
var Xbar = Xbar(independen);
var Ybar = Ybar(dependen);
var ind = "";
var dep = "";
for(i = 0; i < independen.length - 1; i++){
    ind += independen[i] + ' + ';
}
ind += independen[independen.length - 1];
for(i = 0; i < dependen.length - 1; i++){
    dep += dependen[i] + ' + ';
}
dep += dependen[dependen.length - 1];
var XBAR = Xbar/independen.length;
var YBAR = Ybar/dependen.length;

console.log(`Xbar = ${ind} / ${independen.length}\n\t${Xbar}/${independen.length} = ${XBAR}`);
console.log(`Ybar = ${dep} / ${dependen.length}\n\t${Ybar}/${dependen.length} = ${YBAR.toFixed(3)}` )
function Data(independen,dependen){
    var x = "";
    for(i = 0; i < independen.length - 1; i++){
        x += independen[i] + ' , '
    } x += independen[independen.length -1];
    console.log(`X = ${x};`);
    var y = "";
    for(i = 0;i < dependen.length - 1; i++){
        y += dependen[i] + ' , ';
    } y += dependen[dependen.length -1];
    console.log(`Y = ${y};`);
}
Data(independen,dependen);
function XXbar(independen,XBAR){
    var n = 0;
    var k = [];
    for(i = 0; i < independen.length; i++){
        n += independen[i] - XBAR;
        k.push(independen[i] - XBAR);
    }
    if(true){
        var o = "";
        for(i = 0; i < k.length - 1; i++ ){
            o += k[i].toFixed(3) + ' , ';
        } o += k[k.length - 1];
        console.log(`X-Xbar = ${o};`);
    } console.log(`\tJumlah dari (X - Xbar) = ${n}`);
    return n;
}
XXbar(independen,XBAR);
function YYbar(dependen,YBAR){
    var nn = 0;
    var kk = [];
    for(i = 0; i < dependen.length; i++){
        nn += dependen[i] -YBAR;
        kk.push(dependen[i] - YBAR);
    } 
    if(true){
        var oo = "";
        for(i = 0; i < kk.length; i++){
            oo += kk[i].toFixed(3) + ' , ';
        } oo += kk[kk.length - 1];
        console.log(`Y-Ybar = ${oo}`)
    } console.log(`\tJumlah dari (Y - Ybar) = ${nn}`);
    return nn;
}
YYbar(dependen,YBAR);

function SSxx(independen,XBAR){
    var nx = 0;
    var kx = [];
    for(i = 0; i < independen.length; i++ ){
        nx += (independen[i] - XBAR) * (independen[i] - XBAR);
        kx.push((independen[i] - XBAR) * (independen[i] - XBAR));
    } if(true){
        var ox = "";
        for(i = 0; i < kx.length - 1; i++){
            ox += kx[i].toFixed(3) + ' , ';
        } ox += kx[kx.length - 1];
    } console.log(`SSxx = ${ox};`);
    console.log(`\tJumlah dari (SSxx) = ${nx}`);
    return nx;
}
SSxx(independen,XBAR);

function SSxy(independen,XBAR,dependen,YBAR){
    var xy = 0;
    var kxy = [];
    for(i = 0; i < independen.length && dependen.length; i++){
        xy += (independen[i] - XBAR) * (dependen[i] - YBAR);
        kxy.push((independen[i] - XBAR) * (dependen[i] - YBAR) );
    } if(true){
        var oxy = "";
        for(i = 0; i < kxy.length - 1; i++){
            oxy += kxy[i].toFixed(3) + ' , ';
        } oxy += kxy[kxy.length - 1];
    } console.log(`SSxy = ${oxy};`);
    console.log(`\tJumlah dari (SSxy) = ${xy}`);
    return xy;
} 
SSxy(independen,XBAR,dependen,YBAR);
function HasilXY(independen,XBAR,dependen,YBAR){
    var hxy = 0;
    var hxx = 0;
    var x = 35;
    for(i = 0; i < independen.length && dependen.length; i++){
        hxy += (independen[i] - XBAR) * (dependen[i] - YBAR);
        hxx += (independen[i] - XBAR) * (independen[i] - XBAR);
        b = hxy/hxx
        a = YBAR - (b * XBAR)
        var Ytopi = a + (b * x)
    } console.log(`b = SSxy/SSxx = ${hxy}/${hxx} = ${b.toFixed(3)}`)
    console.log(`b = ${b.toFixed(3)}`)
    console.log(`a = Ybar - (b * Xbar) = ${YBAR.toFixed(3)} - (${b.toFixed(3)} * ${XBAR.toFixed(3)}) = ${a.toFixed(3)}`)
    console.log(`a = ${a.toFixed(3)}`)
    console.log(`Ytopi = a + b(x)\n\t ${a.toFixed(3)} + (${b.toFixed(3)} * ${x})`);
    console.log(`Ytop = ${Ytopi.toFixed(3)}`);
}
HasilXY(independen,XBAR,dependen,YBAR);
