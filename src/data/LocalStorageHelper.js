export function store_user(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function store_user_nfts(user_nfts){
    localStorage.setItem('user_nfts', JSON.stringify(user_nfts));
}

export function get_user() {
    return JSON.parse(localStorage.getItem('user'));
}

export function get_user_nft_balances() {
    return JSON.parse(localStorage.getItem('user_nft_balances'));
}

export function clear() {
    localStorage.clear();
}