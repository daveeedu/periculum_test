import React from "react";

export default function Table({ data, tableClass, tableHeaderClass }) {
  return (
    <div className="lr-8 xl:w-[97%] flow-root mt-8 lg:w-[80%] md:w-[90%] w-[97%]">
      <div className="overflow-x-auto md:overflow-visible rounded-lg">
        <table className={`w-full  w-[100%]  ${tableClass}`}>
          <thead className={`${tableHeaderClass}`}>
            <tr className=" ">
              {Object.keys(data[0]).map((name, i) =>
                name !== "_data" ? (
                  <th key={i} className={"text-start uppercase px-5 py-4 text-[18px] font-[600] text-[#292D32]"}>
                    {name}
                  </th>
                ) : null
              )}
            </tr>
          </thead>
          <tbody className="space-y-6">
            {data.map((row, index) => (
              <tr
                className={`bg-white  `}
                key={index}
              >
                {Object.keys(row).map((key, i) => (
                  key !== "_data" ? (
                  <td
                    key={key + "_" + i}
                    className={`capitalize text-start  py-3 px-5 text-center md:text-lg text-sm`}
                  >
                    {row[key]}
                  </td>
                  ) : null
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
