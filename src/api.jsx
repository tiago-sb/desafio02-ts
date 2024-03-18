const conta = {
    name: 'Tiago Bela',
    email: 'tiago@gmail.com',
    password: '12345',
    balance: 1900.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})