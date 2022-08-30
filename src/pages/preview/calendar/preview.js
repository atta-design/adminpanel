// components
import {default as Calendar} from "../../../components/calendar/calendar/Calendar";
import {default as DatePicker} from "../../../components/calendar/datePicker/DatePicker";

// configs
// DatePicker
import { DatePickerConfig as ShamsiIcon } from "./configs/datePicker/shamsi/icon";
import { DatePickerConfig as ShamsiRange } from "./configs/datePicker/shamsi/range";
import { DatePickerConfig as ShamsiSimple } from "./configs/datePicker/shamsi/simple";
import { DatePickerConfig as ShamsiMultiple } from "./configs/datePicker/shamsi/multiple";
import { DatePickerConfig as ShamsiOnlyYear } from "./configs/datePicker/shamsi/onlyYear";
import { DatePickerConfig as ShamsiInputIcon } from "./configs/datePicker/shamsi/inputIcon";
import { DatePickerConfig as ShamsiOnlyMonth } from "./configs/datePicker/shamsi/onlyMonth";
import { DatePickerConfig as ShamsiPlaceholder } from "./configs/datePicker/shamsi/placeholder";
import { DatePickerConfig as ShamsiEnglishLanguage } from "./configs/datePicker/shamsi/englishLanguage";

import { DatePickerConfig as GregorianSimple } from "./configs/datePicker/gregorian/simple";
import { DatePickerConfig as GregorianPersianLanguage } from "./configs/datePicker/gregorian/persianLanguage";

// Calendar
import { CalendarConfig as CalendarShamsiRange } from "./configs/calendar/shamsi/range";
import { CalendarConfig as CalendarShamsiExtra } from "./configs/calendar/shamsi/extra";
import { CalendarConfig as CalendarShamsiSimple } from "./configs/calendar/shamsi/simple";
import { CalendarConfig as CalendarShamsiOnlyYear } from "./configs/calendar/shamsi/onlyYear";
import { CalendarConfig as CalendarShamsiMultiple } from "./configs/calendar/shamsi/multiple";
import { CalendarConfig as CalendarShamsiFullYear } from "./configs/calendar/shamsi/fullYear";
import { CalendarConfig as CalendarShamsiOnlyMonth } from "./configs/calendar/shamsi/onlyMonth";
import { CalendarConfig as CalendarShamsiEnglishLanguage } from "./configs/calendar/shamsi/englishLanguage";

import { CalendarConfig as CalendarGregorianSimple } from "./configs/calendar/gregorian/simple";
import { CalendarConfig as CalendarGregorianPersianLanguage } from "./configs/calendar/gregorian/persianLanguage";


export default function CalendarPreview() {

    return(
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
				<div className="card">
                    <div className="row g-5 gx-xxl-8">
                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخابگر تاریخ شمسی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={ShamsiSimple} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخابگر تاریخ شمسی زبان انگلیسی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={ShamsiEnglishLanguage} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخابگر تاریخ میلادی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={GregorianSimple} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخابگر میلادی زبان فارسی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={GregorianPersianLanguage} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخابگر تاریخ به صورت اینپوت و آیکون</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={ShamsiInputIcon} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخابگر تاریخ به صورت آیکون</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={ShamsiIcon} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">placeholder</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={ShamsiPlaceholder} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخاب تاریخ به صورت بازه</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={ShamsiRange} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخاب تاریخ به صورت چندتایی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={ShamsiMultiple} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخاب فقط ماه</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={ShamsiOnlyMonth} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخاب فقط سال</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <DatePicker config={ShamsiOnlyYear} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">تقویم شمسی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <Calendar config={CalendarShamsiSimple} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">تقویم شمسی زبان انگلیسی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <Calendar config={CalendarShamsiEnglishLanguage} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">تقویم میلادی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <Calendar config={CalendarGregorianSimple} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">تقویم میلادی زبان فارسی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <Calendar config={CalendarGregorianPersianLanguage} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">تقویم فقط ماه</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <Calendar config={CalendarShamsiOnlyMonth} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">تقویم فقط سال</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <Calendar config={CalendarShamsiOnlyYear} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">تقویم چندانتخابی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <Calendar config={CalendarShamsiMultiple} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">تقویم بازه ای</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <Calendar config={CalendarShamsiRange} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">تقویم بیش از یک ماه</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <Calendar config={CalendarShamsiExtra} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">تقویم تمام سال</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <Calendar config={CalendarShamsiFullYear} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}