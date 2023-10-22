const STORAGE_KEY = "accessToken"

const isLogged = () => sessionStorage.getItem(STORAGE_KEY) !== null;

const login = (token: string) => {
    sessionStorage.setItem(STORAGE_KEY, token)
}

const logout = () => { sessionStorage.removeItem(STORAGE_KEY), window.location.href=("/login")};

export { isLogged, login, logout }