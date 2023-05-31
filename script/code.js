// let info = document.querySelector(".tableContent");
// person.forEach((thingy) => {
// info.innerHTML += `
// <tr>
//     <td>${thingy.fName}</td>
//     <td>${thingy.surName}</td>
//     <td>${thingy.age}</td>
// </tr>`
// })

let shopList=[
    {
        id:1,
        name:"Jacket",
        price:"R800",
        img:"https://i.postimg.cc/MG1jzy6w/vans-jacket.jpg",
    },
    {
        id:2,
        name:"shoes",
        price:"R1200",
        img:"https://i.postimg.cc/0jy6GFp5/vans-mushrooms.webp",
    },
    {
        id:3,
        name:"Rosey-T",
        price:"R450",
        img:"https://i.postimg.cc/DZF4080X/vans-tshirt-rose.jpg",
    },
]

let sweet = document.querySelector(".products");
shopList.forEach((thingg) => {
sweet.innerHTML += `
<tr>
    <td>${thingg.name}</td>
    <td>${thingg.price}</td>
    <td><img src="${thingg.img}"></td>
</tr>`
})

