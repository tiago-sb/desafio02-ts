interface IDioBank {
  login: boolean
}

const dioBank = {
  login: false
}

export const createLocalStorage = (): void => {
  localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
  localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem('diobank')
}