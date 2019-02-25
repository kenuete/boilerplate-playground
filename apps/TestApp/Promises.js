let p1 = new Promise((resolve, reject) => {
    resolve(10)
})

p1.then((value) => {
    console.log(value)
})