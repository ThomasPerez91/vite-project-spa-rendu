export default function debounce(callback: (...args: any) => Promise<void>, timeout: number = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback.apply(this, args), timeout);
    };
}
