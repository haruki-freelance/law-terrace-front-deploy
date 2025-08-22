import { useState, type ComponentProps } from "react";
import { Button } from "../button/button";
import { Select } from "../select/select";
import { type CalendarDate, getLocalTimeZone, parseDate, today } from '@internationalized/date';
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  type CalendarProps,
} from 'react-aria-components';

type CalendarInputProps = CalendarProps<CalendarDate> & {
  isShown: boolean
};

export function CalendarInput(props: CalendarInputProps) {
    const [date, setDate] = useState<CalendarDate | null>(parseDate('2025-02-18'));
    const [focusedDate, setFocusedDate] = useState(parseDate('2025-02-18'));
    const { isShown, onChange, className } = props;

    const changeDate = (value: CalendarDate | null) => {
      setDate(value);
      if (!!onChange && !!value) {
        onChange(value);
      }
    };
    return isShown ? (
      <Calendar className={`flex flex-col items-center w-max bg-white border-1 rounded-8 ${className ?? ''}`} value={date} onChange={changeDate} focusedValue={focusedDate} onFocusChange={setFocusedDate}>
        <div className='flex items-center gap-2 p-4'>
          <Select className='!h-11' blockSize='md' value={focusedDate.year} onChange={event => setFocusedDate(focusedDate.set({
          year: Number(event.target.value)
        }))} aria-label='年'>
            <option value={2018}>2018年(平成30年)</option>
            <option value={2019}>2019年(令和元年)</option>
            <option value={2020}>2020年(令和2年)</option>
            <option value={2021}>2021年(令和3年)</option>
            <option value={2022}>2022年(令和4年)</option>
            <option value={2023}>2023年(令和5年)</option>
            <option value={2024}>2024年(令和6年)</option>
            <option value={2025}>2025年(令和7年)</option>
            <option value={2026}>2026年(令和8年)</option>
            <option value={2027}>2027年(令和9年)</option>
            <option value={2028}>2028年(令和10年)</option>
            <option value={2029}>2029年(令和11年)</option>
            <option value={2030}>2030年(令和12年)</option>
          </Select>
          <div className='flex items-center'>
            <Button className='!min-w-0 !size-11' slot='previous' size='sm' variant='outline' onClick={() => setFocusedDate(focusedDate.add({
            months: -1
          }))}>
              <svg className='mx-auto' width='16' height='16' role='img' aria-label='前の月'>
                <path d='m5.27 8 5.33-5.33-.93-.94L3.4 8l6.27 6.27.93-.94L5.27 8Z' fill='currentcolor' />
              </svg>
            </Button>
            <p className='w-14 text-center'>{focusedDate?.month}月</p>
            <Button className='!min-w-0 !size-11' slot='next' size='sm' variant='outline' onClick={() => setFocusedDate(focusedDate.add({
            months: 1
          }))}>
              <svg className='mx-auto' width='16' height='16' role='img' aria-label='次の月'>
                <path d='m6 1.73-.93.94L10.4 8l-5.33 5.33.93.94L12.27 8 6 1.73Z' fill='currentcolor' />
              </svg>
            </Button>
          </div>
        </div>
        <CalendarGrid className='mx-3 mb-2'>
          <CalendarGridHeader className='[&_th]:p-0'>
            {day => <CalendarHeaderCell className='size-12 text-center font-bold'>
                {day}
              </CalendarHeaderCell>}
          </CalendarGridHeader>
          <CalendarGridBody className='[&_td]:p-0'>
            {date => <CalendarCell className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] aria-disabled:hidden hover:bg-solid-gray-50 hover:underline focus:outline-0 data-[focus-visible]:bg-yellow-300 data-[focus-visible]:outline data-[focus-visible]:outline-4 data-[focus-visible]:outline-black data-[focus-visible]:outline-offset-[calc(2/16*1rem)] data-[focus-visible]:ring-[calc(2/16*1rem)] data-[focus-visible]:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white' date={date} />}
          </CalendarGridBody>
        </CalendarGrid>
        <div className='flex self-stretch justify-between gap-4 p-4'>
          <Button variant='text' size='sm' onClick={() => changeDate(null)}>
            削除
          </Button>
          <Button variant='outline' size='sm' onClick={() => {
          changeDate(today(getLocalTimeZone()));
          setFocusedDate(today(getLocalTimeZone()));
        }}>
            今日
          </Button>
        </div>
      </Calendar>
    ) : <></>;
}
