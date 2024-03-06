const independen = [20,30,40,50,60,70];
const dependen = [4.1,6.2,8.3,10.1,12.4,14.5];
var x = 35; //nilai dari x untuk ŷ = a + (b * x)
var y = 8; // nilai dari y untuk ε = y - ŷ
var namaX = 'Kecepatan(km/jam)';//Nama dari variabel independen
var namaY = 'Jarak Reaksi(m)';//Nama dari variabel dependen
console.log(`===================================================================`)
console.log(`© 2024 All Night (AWP), all rights reserved. Made with ❤️ for all.`);
console.log(`===================================================================`)

//=== Rumus ===\\
console.log(`\nRumus`)
console.log(`x̄ = Jumlah dari x / panjang dari x`);
console.log(`ȳ = Jumlah dari y / panjang dari y`);
console.log(`x - x̄ = x - x̄`);
console.log(`y - ȳ = y - ȳ`);
console.log(`SSxx = (x - x̄) * (x - x̄)`);
console.log(`SSyy = (y - ȳ) * (y - ȳ)`);
console.log(`SSxy = (x - x̄) * (y - ȳ)`);
console.log(`b = SSxy / SSxx`);
console.log(`a = ȳ - (b * x̄)`);
console.log(`ŷ = a + (b * x)`);
console.log(`r = SSxy / (akar(SSxx * SSyy))`);
console.log(`R² = (SSxy * SSxy) / SSxx * SSyy`);
console.log(`ε = y - ŷ`)


//=== INTERPRETASI DATA ===\\
console.log(`\nINTERPRETASI DATA`);
//=== X ===\\
console.log(`x = ${independen}`);
//=== Y ===\\
console.log(`y = ${dependen}`);
//=== Xbar ===\\
function Xbar(independen){
    var x = 0;
    for(i = 0;i < independen.length; i++){
        x += independen[i];
    } return x;
}
var nxbar = Xbar(independen);
//=== X - Xbar ===\\
function XXbar(independen,XBAR){
    var x = 0;
    var n = [];
    for(i = 0; i < independen.length; i++){
        x += independen[i] - XBAR;
        n.push(independen[i] - XBAR);
    } if(true){
        var xxbar = "";
        for(i = 0; i < n.length - 1; i++){
            xxbar += n[i].toFixed(3) + ','; 
        } xxbar += n[n.length - 1];
        console.log(`x - x̄ = ${xxbar}`)
    } return x;
}
var XBAR = (nxbar/independen.length).toFixed(3);
var XXBAR = XXbar(independen,XBAR);
//=== (X - Xbar) * (X - Xbar) ===\\
function SSxx(independen,XBAR){
    var x = 0;
    var n = [];
    for(i = 0;i < independen.length; i++){
        x += (independen[i] - XBAR) * (independen[i] - XBAR);
        n.push((independen[i] - XBAR) * (independen[i] - XBAR));
    } if(true){
        var ssxx = "";
        for(i = 0; i < n.length - 1;i++){
            ssxx += n[i].toFixed(3) + ',';
        } ssxx += n[n.length - 1];
        console.log(`(x - x̄) * (x - x̄) = ${ssxx}`)
    } return x;
}
var SSXX = SSxx(independen,XBAR);
//=== Ybar ====\\
function Ybar(dependen){
    var y = 0;
    for(i = 0;i < dependen.length; i++){
        y += dependen[i];
    } return y;
}
var nybar = Ybar(dependen);
var YBAR = (nybar/dependen.length).toFixed(3);
//=== Y - Ybar ===\\
function YYbar(dependen,YBAR){
    var y = 0;
    var n = [];
    for(i = 0;i < dependen.length; i++ ){
        y += dependen[i] - YBAR;
        n.push(dependen[i] - YBAR);
    } if(true){
        var yybar = "";
        for(i = 0;i < n.length - 1; i++){
            yybar += n[i].toFixed(3) + ',';
        } yybar += n[n.length - 1];
        console.log(`y - ȳ = ${yybar}`);
    } 
    return y;
}
var YYBAR = YYbar(dependen,YBAR);
//=== (Y - Ybar) * (Y - Ybar) ===\\
function SSyy(dependen,YBAR){
    var y = 0;
    var n = [];
    for(i = 0; i < dependen.length; i++){
        y += (dependen[i] - YBAR) * (dependen[i] - YBAR)
        n.push((dependen[i] - YBAR) * (dependen[i] - YBAR))
    } if(true){
        var ssyy = "";
        for(i = 0;i < n.length - 1; i++){
            ssyy += n[i].toFixed(3) + ',';
        } ssyy += n[n.length - 1];
        console.log(`(y - ȳ) * (y - ȳ) = ${ssyy}`);
    } return y;
}
var SSYY = SSyy(dependen,YBAR);
//=== (X - Xbar) * (Y - Ybar) ===\\
function SSxy(independen,XBAR,dependen,YBAR){
    var xy = 0;
    var n = [];
    for(i = 0;i < independen.length && i < dependen.length; i++){
        xy += (independen[i] - XBAR) * (dependen[i] - YBAR);
        n.push((independen[i] - XBAR) * (dependen[i] - YBAR));
    } if(true){
        var ssxy = "";
        for(i = 0;i < n.length - 1; i++){
            ssxy += n[i].toFixed(3) + ',';
        } ssxy += n[n.length - 1];
        console.log(`(x - x̄) * (y - ȳ) = ${ssxy} `);
    } return xy;
}
var SSXY = SSxy(independen,XBAR,dependen,YBAR);
//=== I ====\\
XBAR = parseFloat(XBAR).toString();
YBAR = parseFloat(YBAR).toString(); 
var b = SSXY/SSXX;
var a = YBAR - (b * XBAR);
var Ytopi = a + (b * x);
console.log(`x̄ = ${independen}/${independen.length} \nx̄ = ${nxbar}/${independen.length}\nx̄ = ${XBAR}`);
console.log(`ȳ = ${dependen}/${dependen.length} =\nȳ = ${nybar}/${dependen.length}\nȳ = ${YBAR}`);
console.log(`x - x̄ = ${XXBAR.toFixed(3)}`);
console.log(`y - ȳ = ${YYBAR.toFixed(3)}`);
//=== Persamaan Regresi ===\\
console.log(`\nPersamaan Regresi`);
console.log(`x̄ = ${XBAR}`);
console.log(`ȳ = ${YBAR}`);
console.log(`SSxx = ${SSXX}`);
console.log(`SSyy = ${SSYY}`);
console.log(`SSxy = ${SSXY}`);
console.log(`b = ${b.toFixed(3)}`);
console.log(`a = ${a.toFixed(3)}`);
console.log(`ŷ = ${Ytopi.toFixed(3)}`);
//=== Nilai ε ===\\
console.log(`\nNiali epsilon(ε)`)
var epsilon = y - Ytopi;
console.log(`ε = ${epsilon}`)
//=== Niali R ===\\
console.log(`\nNiali R`);
var r = SSXY / (Math.sqrt(SSXX * SSYY));
console.log(`r = ${r.toFixed(3)}`);
//=== Nilai Koefisien determinasi ===
console.log(`\nNilai Koefisien determinasi:`);
//=== Jenis Korelasi ===\\
if(r === 0){
    console.log(`Jenis Korelasi = Tidak berkorelasi linear`);
} else if(r > 0 && r <= 0.3){
    console.log(`Jenis Korelasi = Korelasi positif lemah`);
} else if(r < 0 && r <= -0.3){
    console.log(`Jenis Korelasi = Korelasi negatif lemah`);
} else if(r > 0.3 && r <= 0.7){
    console.log(`Jenis Korelasi = Korelasi positif sedang`);
} else if(r > -0.3 && r <= -0.7){
    console.log(`Jenis Korelasi = Korelasi negatif sedang`);
} else if(r > 0.7 && r < 1){
    console.log(`Jenis Korelasi = Korelasi positif kuat`);
} else if(r > -0.7 && r < -1) {
    console.log(`Jenis Korelasi = Korelasi negatif kuat`);
} else if(r === 1){
    console.log(`Jenis Korelasi = Korelasi positif sempurna`);
} else if(r === -1){
    console.log(`Jenis Korelasi = Korelasi negatif sempurna`);
}
//=== Tingkat Korelasi ===\\
if(r === 0){
    console.log(`Tingkat Korelasi = Tidak ada Korelasi`);
} else if(r <= -0.3 && r < 0 || r > 0 && r <= 0.3){
    console.log(`Tingkat Korelasi = Lemah`);
} else if(r <= -0.7 && r > -0.3 || r > 0.3 && r <= 0.7){
    console.log(`Tingkat Korelasi = Sedang/Cukup`);
} else if(r < -1 && r >= -0.7 || r > 0.7 && r < 1){
    console.log(`Tingkat Korelasi = Kuat`);
} else if(r === -1 || r === 1){
    console.log(`Tingkat Korelasi = Sempurna`);
}

//=== Interpretasi Koefisien determinasi ===\\
console.log(`\nInterpretasi Koefisien determinasi`);
var r2 = (SSXY *SSXY)/SSXX * SSYY
console.log(`R² = ${r2.toFixed(3)}`);
//=== Kesimpulan ===\\
console.log(`\nKesimpulan:`);
if(r === 0){
    console.log(`Jadi tidak ada hubungan antara ${namaX} dan ${namaY}`);
} else if(r > 0 && r <= 0.3){
    console.log(`Jadi semakin besar nilai ${namaX} maka nilai ${namaY} juga semakin besar.`);
} else if(r < 0 && r <= -0.3){
    console.log(`Jadi semakin besar nilai ${namaX} maka nilai ${namaY} semakin kecil.`);
} else if(r > 0.3 && r <= 0.7){
    console.log(`Jadi semakin besar nilai ${namaX} maka nilai ${namaY} juga semakin besar.`);
} else if(r > -0.3 && r <= -0.7){
    console.log(`Jadi semakin besar nilai ${namaX} maka nilai ${namaY} semakin kecil.`);
} else if(r > 0.7 && r < 1){
    console.log(`Jadi semakin besar nilai ${namaX} maka nilai ${namaY} juga semakin besar.`);
} else if(r > -0.7 && r < -1) {
    console.log(`Jadi semakin besar nilai ${namaX} maka nilai ${namaY} semakin kecil.`);
} else if(r === 1){
    console.log(`Jadi semakin besar nilai ${namaX} maka nilai ${namaY} juga semakin besar.`);
} else if(r === -1){
    console.log(`Jadi semakin besar nilai ${namaX} maka nilai ${namaY} semakin kecil.`);
}
