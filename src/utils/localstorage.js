export const LocalStorageFN = {
    addToLocalStorage: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    },
    getFromLocalStorage: (key) => {
        return JSON.parse(localStorage.getItem(key))
    },
    removeFromLocalStorage: (key) => {
        localStorage.removeItem(key)
    }
}