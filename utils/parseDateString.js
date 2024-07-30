export const parseDateString = (dateString) => {
    const year = parseInt(dateString.substring(0, 2), 10) + 2000;
    const month = parseInt(dateString.substring(2, 4), 10) - 1;
    const day = parseInt(dateString.substring(4, 6), 10);
    const hours = parseInt(dateString.substring(6, 8), 10);
    const minutes = parseInt(dateString.substring(8, 10), 10);
    const seconds = parseInt(dateString.substring(10, 12), 10);
    return new Date(Date.UTC(year, month, day, hours, minutes, seconds));
};