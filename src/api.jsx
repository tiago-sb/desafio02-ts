const conta = {
    name: 'Tiago Bela',
    email: 'tiago@gmail.com',
    password: '12345'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})