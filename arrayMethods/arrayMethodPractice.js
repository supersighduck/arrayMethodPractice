const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

// youtube video link: https://www.youtube.com/watch?v=R8rmfD9Y5-c&t

//Use a broswer, https://jsfiddle.net/, or https://codepen.io/  --- if you use a broswer, make sure to copy and paste the array into the broswer BEFORE you try methods on the "items" array 

// ASSIGNMENT STARTS HERE *******************
// 1. user the filter() method to filter out items that are less than $50 -- you should get three items back (video reference 0:30)
const filteredItems = items.filter((item) => {
    return item.price <= 50
})

console.log(items)
console.log(filteredItems)

// 2. use the map() method to get a list of all the prices ONLY (property of "price") --- (video reference 2:06)
const itemNames = items.map((item) => {
    return item.price
})

console.log(itemNames)

// 3. use the find() method to find "Computer" --- (video reference 2:55)
const foundItem = items.find((item) =>{
    return item.name === 'Computer'
})

console.log(foundItem)

// 4. use the forEach() method to print out each "price" from the array (video reference 3:44)

items.forEach((item) => {
    console.log(item.price)
})

// 5. use the recude() method to add up all of the "price"s (video reference 7:26) -- should output 1820 
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)