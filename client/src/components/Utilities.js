const months = {
	'01': 'January',
	'02': 'February',
	'03': 'March',
	'04': 'April',
	'05': 'May',
	'06': 'June',
	'07': 'July',
	'08': 'August',
	'09': 'September',
	10: 'October',
	11: 'November',
	12: 'December',
};

export const getDate = (param) => {
	let today = new Date();

	if (param) {
		today = new Date(param);
	}

	const yyyy = today.getFullYear();
	let mm = today.getMonth() + 1; // Months start at 0!
	let dd = today.getDate();
	// let hh = today.getHours();
	let mn = today.getMinutes();

	if (dd < 10) dd = '0' + dd;
	if (mm < 10) mm = '0' + mm;
	if (mn < 10) mn = '0' + mn;

	let formattedToday = dd + '-' + months[mm] + ' ' + yyyy;

	if (param) {
		formattedToday = dd + ' ' + months[mm] + ' ' + yyyy;
	}

	return formattedToday;
};

export const statusButton = (status) => {
	if (status === 'pending') {
		return 'pendingButton';
	} else if (status === 'paid') {
		return 'paidButton';
	} else {
		return 'draftButton';
	}
};

export const capitalize = (status) => {
	let firstLetter = status.charAt(0);
	firstLetter = firstLetter.toUpperCase();
	let rest = status.slice(1);
	let capitalizedWord = firstLetter + rest;
	return capitalizedWord;
};
