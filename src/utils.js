import moment from "moment";

export const formatDate = (inputDate) => {
    if (!inputDate) return null;

    const dateFormat = "DD.MM.YYYY Z";
    const dateTimeFormat = "DD.MM.YYYY HH:mm Z";

    const isDateOnly = moment(inputDate, dateFormat, true).isValid();

    const parsedDate = isDateOnly
        ? moment(inputDate, dateFormat)
        : moment(inputDate, dateTimeFormat);

    return parsedDate.format(isDateOnly ? "DD.MM.YYYY" : "DD.MM.YYYY HH:mm");
};

export function formatDuration(seconds) {
    const secondsInOneDay = 86400;
    const secondsInOneHour = 3600;

    const days = Math.floor(seconds / secondsInOneDay);
    const hours = Math.floor((seconds % secondsInOneDay) / secondsInOneHour);

    if (days > 0) {
        return `${days} ${getDaysWord(days)}`;
    } else if (hours > 0) {
        return `${hours} ${getHoursWord(hours)}`;
    } else {
        return 'Менее часа';
    }
}

function getDaysWord(n) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return 'день';
    } else if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) {
        return 'дня';
    } else {
        return 'дней';
    }
}

function getHoursWord(n) {
    if (n === 1) {
        return 'час';
    } else if ([2, 3, 4].includes(n)) {
        return 'часа';
    } else {
        return 'часов';
    }
}

export const replaceDot = (number) => {
    if (!number) return 0
    return String(number)?.replace(/[.,]/g, ' ')
}