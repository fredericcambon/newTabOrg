var backgrounds = [ {
    "file": "../images/1426623052_c131c1eb25_o.jpg"
}, {
    "file": "../images/14357122412_c0c1ffe677_k.jpg"
}, {
    "file": "../images/2594408987_d61ee717db_o.jpg"
}, {
    "file": "../images/264549705_3480863281_o.jpg"
}, {
    "file": "../images/275801571_1c141b536f_o.jpg"
}, {
    "file": "../images/3039346773_2f8b82187f_o.jpg"
}, {
    "file": "../images/4773785162_a0dacc9927_o.jpg"
}, {
    "file": "../images/4836339101_1ef9ae6678_o.jpg"
}, {
    "file": "../images/4839701709_7985af5c69_o.jpg"
}, {
    "file": "../images/5085307085_5ffdca1a29_o.jpg"
}, {
    "file": "../images/5378099835_e3fded6dc0_o.jpg"
}, {
    "file": "../images/5531772541_c5597c87c6_o.jpg"
}, {
    "file": "../images/7849621984_e42beb722b_o.jpg"
}, {
    "file": "../images/7849622600_d34d591f10_o.jpg"
}, {
    "file": "../images/9551271488_7007b742b1_k.jpg"
} ];

var today = new Date();
var onejan = new Date( today.getFullYear(), 0, 1 );
var dayOfTheYear = Math.ceil( ( today - onejan ) / 86400000 );
var rnd_index = dayOfTheYear % backgrounds.length;

var m = document.getElementById("container");
m.style['background-image'] = 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(' + backgrounds[rnd_index].file + ')';
