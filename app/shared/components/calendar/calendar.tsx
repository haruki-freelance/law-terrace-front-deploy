import { Button } from "../button/button";
import { Select } from "../select/select";

<div className='flex flex-col items-center w-max'>
    <div className='flex items-center gap-2 p-4'>
    <Select className='!h-11' blockSize='md' aria-label='年' defaultValue={2025}>
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
        <Button className='!min-w-0 !size-11' size='sm' variant='outline'>
        <svg className='mx-auto' width='16' height='16' role='img' aria-label='前の月'>
            <path
            d='m5.27 8 5.33-5.33-.93-.94L3.4 8l6.27 6.27.93-.94L5.27 8Z'
            fill='currentcolor'
            />
        </svg>
        </Button>
        <p className='w-14 text-center'>2月</p>
        <Button className='!min-w-0 !size-11' size='sm' variant='outline'>
        <svg className='mx-auto' width='16' height='16' role='img' aria-label='次の月'>
            <path
            d='m6 1.73-.93.94L10.4 8l-5.33 5.33.93.94L12.27 8 6 1.73Z'
            fill='currentcolor'
            />
        </svg>
        </Button>
    </div>
    </div>
    <table className='mx-3 mb-2' aria-label='2025年2月'>
    <thead className='[&_th]:p-0'>
        <tr>
        <th className='size-12 text-center font-bold' scope='col'>
            日
        </th>
        <th className='size-12 text-center font-bold' scope='col'>
            月
        </th>
        <th className='size-12 text-center font-bold' scope='col'>
            火
        </th>
        <th className='size-12 text-center font-bold' scope='col'>
            水
        </th>
        <th className='size-12 text-center font-bold' scope='col'>
            木
        </th>
        <th className='size-12 text-center font-bold' scope='col'>
            金
        </th>
        <th className='size-12 text-center font-bold' scope='col'>
            土
        </th>
        </tr>
    </thead>
    <tbody className='[&_td]:p-0'>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <button
            type='button'
            aria-label='2025年2月1日 土曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            1
            </button>
        </td>
        </tr>
        <tr>
        <td>
            <button
            type='button'
            aria-label='2025年2月2日 日曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            2
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月3日 月曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            3
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月4日 火曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            data-focused='true'
            data-focus-visible='true'
            >
            4
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月5日 水曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            5
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月6日 木曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            6
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月7日 金曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            7
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月8日 土曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            8
            </button>
        </td>
        </tr>
        <tr>
        <td>
            <button
            type='button'
            aria-label='2025年2月9日 日曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            9
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月10日 月曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            10
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月11日 火曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            11
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月12日 水曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            12
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月13日 木曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            13
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月14日 金曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            14
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月15日 土曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            15
            </button>
        </td>
        </tr>
        <tr>
        <td>
            <button
            type='button'
            aria-label='2025年2月16日 日曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            16
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月17日 月曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            17
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月18日 火曜日 選択中'
            data-selected
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            18
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='本日、2025年2月19日 水曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            19
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月20日 木曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            20
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月21日 金曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            21
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月22日 土曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            22
            </button>
        </td>
        </tr>
        <tr>
        <td>
            <button
            type='button'
            aria-label='2025年2月23日 日曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            23
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月24日 月曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            24
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月25日 火曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            25
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月26日 水曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            26
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月27日 木曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            27
            </button>
        </td>
        <td>
            <button
            type='button'
            aria-label='2025年2月28日 金曜日'
            className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
            >
            28
            </button>
        </td>
        <td></td>
        </tr>
    </tbody>
    </table>
    <div className='flex self-stretch justify-between gap-4 p-4'>
    <Button variant='text' size='sm'>
        削除
    </Button>
    <Button variant='outline' size='sm'>
        今日
    </Button>
    </div>
</div>
