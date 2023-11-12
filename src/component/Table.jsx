import React from 'react'

const Table = () => {
  return (
    

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Keyphrase
                </th>
                <th scope="col" className="px-6 py-3">
                    Text
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3 uppercase">
                    URL
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    limon
                </th>
                <td className="px-6 py-4">
                    Sen de limon ağacı sen evet sen limon ağacısın. ...
                </td>
                <td className="px-6 py-4">
                    2021-03-03
                </td>
                <td className="px-6 py-4">
                    youtube.com/watch?v=WwE0e5awE2E&t=00h01m00s
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    çay
                </th>
                <td className="px-6 py-4">
                    Çay bunu bilinen öğrenmiş olmalı. ...
                </td>
                <td className="px-6 py-4">
                    2021-03-03
                </td>
                <td className="px-6 py-4">
                    youtube.com/watch?v=WwE0e5awE2E&t=00h01m00s
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    armut
                </th>
                <td className="px-6 py-4">
                    Ben armut ağacı sam. ...
                </td>
                <td className="px-6 py-4">
                    2021-03-03
                </td>
                <td className="px-6 py-4">
                    youtube.com/watch?v=WwE0e5awE2E&t=00h01m00s
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    armut
                </th>
                <td className="px-6 py-4">
                    Armut dibine düşermiş işte canım. ...
                </td>
                <td className="px-6 py-4">
                    2021-03-03
                </td>
                <td className="px-6 py-4">
                    youtube.com/watch?v=WwE0e5awE2E&t=00h01m00s
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    armut
                </th>
                <td className="px-6 py-4">
                    Şimdi de kulağa çürük armut gibi geliyorsun sen de sen de bi...
                </td>
                <td className="px-6 py-4">
                    2021-03-03
                </td>
                <td className="px-6 py-4">
                    youtube.com/watch?v=WwE0e5awE2E&t=00h01m00s
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default Table