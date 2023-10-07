'use client'
import React, { useState, useEffect } from 'react';
import cronstrue from 'cronstrue';
import cron from 'cron-parser';
import Box from '../Box';
import Accordion from '../Accordion';
import CrontabInput from './CrontabInput';
import { stringify } from 'querystring';

const CrontabGenerator: React.FC = () => {

    const BasicOptions = {
        '*': 'Any value',
        ',': 'Value list separator',
        '-': 'Range of values',
        '/': 'Step values',
    }

    // Options specific to the "days of the month" field (1-31)
    const dayOptions = {
        ...BasicOptions,
        '1-31': '1 to 31 (Day of Month)',
    };

    // Options specific to the "hours" field (0-23)
    const hourOptions = {
        ...BasicOptions,
        '0-23': '0 to 23 (Hours)',
    };

    // Options specific to the "minutes" field (0-59)
    const minuteOptions = {
        ...BasicOptions,
        '0-59': '0 to 59 (Minutes)',
        name: "Minutes"
    };

    // Options specific to the "days of the week" field (0-6)
    const dayOfWeekOptions = {
        ...BasicOptions,
        '0-6': 'Sunday to Saturday (Day of Week)',
    };

    // Options specific to the "months" field (1-12)
    const monthOptions = {
        ...BasicOptions,
        '1-12': 'January to December (Month)',
    };
    const [expression, setExpression] = useState<string>('* * * * *');
    const [plainText, setPlainText] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<number>(-1); // Default selected option
    const [option, setOption] = useState<{ [key: string]: any }>(BasicOptions);

    // Define the initial crontab object
    const initialCrontab = {
        minutes: '*',
        hours: '*',
        daysOfMonth: '*',
        months: '*',
        daysOfWeek: '*',
    };

    // State to track the crontab object
    const [crontab, setCrontab] = useState(initialCrontab);

    useEffect(() => {
        console.log(crontab)
        const crontabString = `${crontab.minutes} ${crontab.hours} ${crontab.daysOfMonth} ${crontab.months} ${crontab.daysOfWeek}`;
        try {
            const cronInstance = cron.parseExpression(crontabString);
            setPlainText(cronstrue.toString(crontabString))
            setError('')
        } catch (error: unknown) {
            setError(error as string)
            if (error instanceof Error) {
                setError((error as Error).message);
            }
        }
    }, [crontab]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpression(event.target.value);
    };

    const handleCrontabChange = (newCrontab: any) => {
        setCrontab(newCrontab);
    }


    useEffect(() => {
        console.log(selectedOption)
        switch (selectedOption) {
            case 0:
                setOption(minuteOptions);
                break;
            case 1:
                setOption(hourOptions);
                break;
            case 2:
                setOption(dayOptions);
                break;
            case 3:
                setOption(monthOptions);
                break;
            case 4:
                setOption(dayOfWeekOptions);
                break;
            default:
                setOption(BasicOptions);
                break;
        }
    }, [selectedOption])

    const optionMap = [
        "Minute",
        "Hour",
        "Day of Month",
        "Month",
        "Day of Week"
    ]
    return (
        <div className="flex w-full flex-col items-center mt-8">
            <Box className='w-full text-5xl font-mono text-center m-4'>
                <h3>"{plainText}"</h3>
            </Box>
            {/* <input
            type="text"
            value={expression}
            onChange={handleInputChange}
            className={`p-2 border rounded shadow-md w-full text-center ${error ? 'border-red-800' : ''} bg-slate-600 text-white tracking-[.75rem] text-2xl`}
        /> */}
            <CrontabInput value={crontab} onChange={handleCrontabChange} onInputChange={setSelectedOption} />
            {error &&
                <p className='text-red-600'>{error}</p>
            }
            <Accordion title={`Help Section (${optionMap[selectedOption] || ''})`} className='bg-slate-950 min-w-[26rem] m-2'>
                <div className="flex justify-center mt-8">
                    <table className="min-w-max">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Option</th>
                                <th className="px-4 py-2">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(option).map(([option, description]) => (
                                <tr key={option}>
                                    <td className="border-t px-4 py-2">{option}</td>
                                    <td className="border-t px-4 py-2">{description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Accordion>
        </div>
    );
};

export default CrontabGenerator;