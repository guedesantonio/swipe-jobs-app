import moment from 'moment';

export const formatShiftDate = (start, end) => {
    if (!start || !end) {
        return null;
    }

    const dateStart = moment(start).format('MMM Do , h:mm A');
    const dateEnd = moment(end).format('h:mm A');

    return `${dateStart} - ${dateEnd}`;
}

// todo: add comment
export const formatDistance = milesToTravel => {
    if(!milesToTravel) {
        return 0.00;
    }
    return milesToTravel.toFixed(2);
}

// this method formats rate based on wage per hour in cents
// and will return 0 if invalid rate is provided
export const formatRate = wagePerHourInCents => {
    if (!wagePerHourInCents) {
        return 0.00;
    }
    return (wagePerHourInCents / 100).toFixed(2);
}


