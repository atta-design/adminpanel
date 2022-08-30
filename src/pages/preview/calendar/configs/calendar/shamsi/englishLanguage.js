const onChange = () => {
	return(
		function onChange(e) {
			// your code
		}
	)
};


export const CalendarConfig = {
    "settings":{
        "methods":{
            onChange: onChange(),
        },
        language: "en",  // "en"
        format: "YYYY/MM/DD",
        calendarPosition: "bottom-right",
        sort: true,
        range: false,
        shamsi: true,
        editable: true,
        fullYear: false,
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