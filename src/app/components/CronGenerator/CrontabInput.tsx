import React, { useState, useEffect } from 'react';

export interface Crontab {
    minutes: string;
    hours: string;
    daysOfMonth: string;
    months: string;
    daysOfWeek: string;
}

interface CrontabInputProps {
    value: Crontab;
    onChange: (newValue: Crontab) => void;
    onInputChange: (newValue: number) => void;
}

const CrontabInput: React.FC<CrontabInputProps> = ({ value, onChange, onInputChange }) => {
    const [minutes, setMinutes] = useState<string>(value.minutes);
    const [hours, setHours] = useState<string>(value.hours);
    const [daysOfMonth, setDaysOfMonth] = useState<string>(value.daysOfMonth);
    const [months, setMonths] = useState<string>(value.months);
    const [daysOfWeek, setDaysOfWeek] = useState<string>(value.daysOfWeek);

    useEffect(() => {
        // When the external value changes, update the internal state
        setMinutes(value.minutes);
        setHours(value.hours);
        setDaysOfMonth(value.daysOfMonth);
        setMonths(value.months);
        setDaysOfWeek(value.daysOfWeek);
    }, [value]);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setState: React.Dispatch<React.SetStateAction<string>>
    ) => {
        const newValue = event.target.value;
        setState(newValue);

        // Update the parent component with the new value
        onChange({
            minutes,
            hours,
            daysOfMonth,
            months,
            daysOfWeek,
            [event.target.name]: newValue, // Update the specific field in the crontab object
        });
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement, Element>, index: number) => {
        onInputChange(index);
        event.target.select();
    }

    return (
        <>
        <div className="relative flex">
            {/* Minutes */}
            <input
                type="text"
                name="minutes"
                className="w-1/5 px-2 py-1 border text-center rounded-l-md outline-none bg-slate-900"
                value={minutes}
                onChange={(event) => handleInputChange(event, setMinutes)}
                onFocus={(e) => handleFocus(e, 0)}
            />

            {/* Hours */}
            <input
                type="text"
                name="hours"
                className="w-1/5 px-2 py-1 border text-center outline-none bg-slate-900"
                value={hours}
                onChange={(event) => handleInputChange(event, setHours)}
                onFocus={(e) => handleFocus(e, 1)}
            />

            {/* Days of the Month */}
            <input
                type="text"
                name="daysOfMonth"
                className="w-1/5 px-2 py-1 border text-center outline-none bg-slate-900"
                value={daysOfMonth}
                onChange={(event) => handleInputChange(event, setDaysOfMonth)}
                onFocus={() => onInputChange(2)}
            />

            {/* Months */}
            <input
                type="text"
                name="months"
                className="w-1/5 px-2 py-1 border text-center outline-none bg-slate-900"
                value={months}
                onChange={(event) => handleInputChange(event, setMonths)}
                onFocus={() => onInputChange(3)}
            />

            {/* Days of the Week */}
            <input
                type="text"
                name="daysOfWeek"
                className="w-1/5 px-2 py-1 text-center border rounded-r-md outline-none bg-slate-900"
                value={daysOfWeek}
                onChange={(event) => handleInputChange(event, setDaysOfWeek)}
                onFocus={() => onInputChange(4)}
            />
        </div>
        <div className="relative flex w-full">
            {/* Minutes */}
            <label
                className="w-1/5 px-2 py-1 text-center rounded-l-md outline-none"
            >Minutes</label>

            {/* Hours */}
            <label
                className="w-1/5 px-2 py-1 text-center outline-none"
            >Hours</label>

            {/* Days of the Month */}
            <label
                className="w-1/5 px-2 py-1 text-center outline-none"
            >Days of the Month</label>

            {/* Months */}
            <label
                className="w-1/5 px-2 py-1 text-center outline-none"
            >Months</label>

            {/* Days of the Week */}
            <label
                className="w-1/5 px-2 py-1 text-center rounded-r-md outline-none"
            >Days of the Week</label>
        </div>
        </>
    );
};

export default CrontabInput;
