
// // 1 
// a = [1, 2, 3, 4, 5]
// b = [10,11,12,13,14]

// ab = b.map((b, i) => b + a[i]); 
// console.log(ab)

// // 2

// c = ["A", 1, [2,3],[[4]],"5","B"].flat(5)

// c.shift()
// c.pop()
// c = c.map(Number);
// console.log(c)

// // 3

// let d = [1, 2, 8, "+", 3, 4, "-", 7, "+", 5];
// let s = d.splice(1, 7); 
// let pyst = []; 

// for (let i = 0; i < s.length; i++) {
//   if (typeof s[i] === 'number') {
//     pyst.push(s[i]);
//   } 
// }
// console.log(pyst);
// // 4


// e = [[0]],[[1]],[[[[2]]]]

// // 5

// a = [1,2,3,4,5]


document.getElementById('mapCont').innerHTML = `
    <a href="https://yandex.ru/maps/?text=Москва, Большая садовая, 15" target="_blank" class="map_link">
        <img src="https://static-maps.yandex.ru/1.x/?ll=37.592,55.765&z=16&size=600,450&l=map&pt=37.592,55.765,pm2rdm" 
             alt="Карта проезда" class="map_image">
    </a>
`;