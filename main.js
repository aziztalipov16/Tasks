// let arr = [
//     { title: 'Samsung S20', price: 1000 },
//     { title: 'Samsung A31', price: 200 },
//     { title: 'Samsung S10', price: 600 },
//     { title: 'Xiaomi Mi 10', price: 400 },
//     { title: 'Xiaomi Redmi 8', price: 300 },
//     { title: 'iPhone 13', price: 1100 },
//     { title: 'iPhone 11', price: 800 }
// ]


// function sortedElems() {
//     let diapason = prompt('enter diapason').split(' ');
//     let newArr = arr.filter((item) => {
//         if (item.price >= Number(diapason[0]) && item.price <= Number(diapason[1])) {
//             return item
//         }
//     })
//     for (i of newArr) {
//         console.log(` \n${i.title} - ${i.price}$`)
//     }
//     return null
// }

// sortedElems()

// function findElem() {
//     let titleT = prompt('Enter data of elem you want to find(title)');
//     let newArr = arr.filter(item => item.title.toLowerCase().includes(titleT) ? item : null)
//     if (newArr.includes(false)) {
//         return 'Товары не найдены'
//     } else {
//         for (i of newArr) {
//             console.log(`Мы нашли по вашим условиям \n ${i.title} - ${i.price}$`)
//         }
//     }
// }
// findElem()

// Создать игру.Задача: создать программу, которая запрашивает у пользователя данные для 2 х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по умолчанию(герой 1, герой 2), каждая стихия повышает силу героя на определенное количество пунктов(огонь + 20 к силе, воздух + 15 к силе, вода + 10 к силе, земля + 5 к силе), после добавления героев в бд, устраивать между ними бой и выявлять победителя по следующим характеристикам(победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья), выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, в том случае если победителя нет(отправить в гитхаб)

let dataBase = [];



function createHero() {
    let heroData = prompt('Enter your hero stihiya');
    let heroLovk = +prompt('Enter your lovkost')
    let heroSila = +prompt('enter your sila')
    let hero = {
        sila: heroSila,
        lovk: heroLovk,
        stihiya: heroData,
    }

    if (heroData == 'огонь') {
        hero.sila += 20
    } else if (heroData == 'воздух') {
        hero.sila += 15
    } else if (heroData == 'земля') {
        hero.sila += 5
    } else if (heroData == 'вода') {
        hero.sila += 10
    }

    dataBase.length == 0 ? hero.name = 'Герой 1' : hero.name = 'Герой 2';
    console.log(hero)
    dataBase.push(hero)
}
createHero()
createHero()

function fight(arr) {
    if (arr[0].sila > arr[1].sila) {
        console.log(`Герой 1 победил`)
    } else if (arr[0].sila < arr[1].sila) {
        console.log(`Герой 2 победил`)
    } else if (arr[0].sila == arr[1].sila) {
        if (arr[0].lovk > arr[1].lovk) {
            console.log('Герой 1 победил')
        } else if (arr[0].lovk < arr[1].lovk) {
            console.log(`Герой 2 победил`)
        } else {
            console.log('Ничья')
        }
    }
}
fight(dataBase)