import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import Icon from "react-multi-date-picker/components/icon";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import InputIcon from "react-multi-date-picker/components/input_icon";

import { DatePickerConfig } from "./config";


export default function DatePickerComponent(props) {

	let config = props.config ? props.config : DatePickerConfig

	let inputMode = null

	if (config.settings.inputMode === "icon") {
		inputMode = <Icon />
	} else if (config.settings.inputMode === "inputIcon") {
		inputMode = <InputIcon />
	} else {
		inputMode = null
	}

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
		<DatePicker
			locale={locale}
			plugins={plugins}
			render={inputMode}
			id={config.settings.id}
			name={config.settings.name}
			sort={config.settings.sort}
			title={config.settings.title}
			style={config.settings.style}
			range={config.settings.range}
			format={config.settings.format}
			multiple={config.settings.multiple}
			readOnly={config.settings.readOnly}
			disabled={config.settings.disabled}
			editable={config.settings.editable}
			onOpen={config.settings.methods.onOpen}
			placeholder={config.settings.placeholder}
			onClose={config.settings.methods.onClose}
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