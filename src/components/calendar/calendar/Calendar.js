import React from "react";
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

import { CalendarConfig } from "./config";


export default function CalendarComponent(props) {

	let config = props.config ? props.config : CalendarConfig

	let plugins = []

	if (config.DatePanel.visible) {
		plugins.push(
			<DatePanel
				position={config.DatePanel.position || "left"}
				eachDaysInRange={config.DatePanel.eachDaysInRange || false}
			/>
		)
	}

	if (config.TimePicker.visible) {
		plugins.push(
			<TimePicker
				position={config.TimePicker.position || "bottom"}
				hideSeconds={config.TimePicker.hideSeconds || false}
			/>
		)
	}

	let locale = null

	if (config.settings.shamsi) {
		if (config.settings.language === "en") {
			locale = persian_en
		} else {
			locale = persian_fa
		}
	} else {
		if (config.settings.language === "en") {
			locale = gregorian_en
		} else {
			locale = gregorian_fa
		}
	}


	return (
		<Calendar
            locale={locale}
			plugins={plugins}
			sort={config.settings.sort}
			range={config.settings.range}
			format={config.settings.format}
			multiple={config.settings.multiple}
			fullYear={config.settings.fullYear}
			readOnly={config.settings.readOnly}
			disabled={config.settings.disabled}
			onChange={config.settings.methods.onChange}
			showOtherDays={config.settings.showOtherDays}
			numberOfMonths={config.settings.numberOfMonths}
			onlyYearPicker={config.settings.onlyYearPicker}
			onlyMonthPicker={config.settings.onlyMonthPicker}
			calendarPosition={config.settings.calendarPosition}
			disableDayPicker={config.settings.disableDayPicker}
			disableYearPicker={config.settings.disableYearPicker}
			calendar={config.settings.shamsi ? persian : gregorian}
			disableMonthPicker={config.settings.disableMonthPicker}
		/>
	)
}