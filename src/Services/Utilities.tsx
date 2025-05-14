const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { year: 'numeric' as const, month: "short" as const }
    return date.toLocaleString('uk-UA', options)
}

function timeAgo(time: string): string {
    const now = new Date();
    const postDate = new Date(time);
    const diff = now.getTime() - postDate.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    const pluralize = (n: number, forms: [string, string, string]) => {
        if (n % 10 === 1 && n % 100 !== 11) return `${n} ${forms[0]}`;
        else if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return `${n} ${forms[1]}`;
        else return `${n} ${forms[2]}`;
    };

    if (seconds < 60) {
        return seconds === 0 ? 'щойно' : pluralize(seconds, ['секунду тому', 'секунди тому', 'секунд тому']);
    } else if (minutes < 60) {
        return pluralize(minutes, [' хвилину тому', ' хвилини тому', ' хвилин тому']);
    } else if (hours < 24) {
        return pluralize(hours, [' годину тому', ' години тому', ' годин тому']);
    } else if (days < 30) {
        return pluralize(days, [' день тому', ' дні тому', ' днів тому']);
    } else {
        return pluralize(months, [' місяць тому', ' місяці тому', ' місяців тому']);
    }

}


export { formatDate, timeAgo }