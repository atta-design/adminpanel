const onOpen = () => {
	return(
		function onOpen(e) {
			// your code
		}
	)
};

const onClose = () => {
	return(
		function onClose(e) {
			// your code
		}
	)
};

const onChange = () => {
	return(
		function onChange(e) {
			// your code
		}
	)
};


export const DatePickerConfig = {
    "settings":{
        "methods":{
            onOpen: onOpen(),
            onClose: onClose(),
            onChange: onChange(),
        },
        language: "fa",  // "en"
        id: "datePicker",
        name: "datePicker",
        title: "datePicker",
        format: "YYYY/MM/DD",
        placeholder: "datePicker",
        calendarPosition: "bottom-right",
        inputMode: "input",  // "icon", "inputIcon"
        sort: true,
        range: false,
        shamsi: true,
        editable: true,
        multiple: false,
        readOnly: false,
        disabled: false,
        showOtherDays: true,
        onlyYearPicker: false,
        onlyMonthPicker: false,
        disableDayPicker: false,
        disableYearPicker: false,
        disableMonthPicker: false,
        numberOfMonths: 1,
        style: {},
    },
    "DatePanel": {
        visible: false,
        position: "left",
        eachDaysInRange: false,
    },
    "TimePicker": {
        visible: false,
        position: "left",
        hideSeconds: true,
    }
}