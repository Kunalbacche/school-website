/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Pagination } from 'antd';
import { useAdmin } from '../../hooks/AdminContext';

const Table = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const { isAdmin } = useAdmin(); // Access the isAdmin state from context

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const currentData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-5 dark:bg-darkModeCard bg-white border-black border-b-4 border-r-4 rounded shadow-md overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-darkpurple font-normal text-[1rem] text-white text-left">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-2 border border-white"
                style={{
                  borderTopLeftRadius: index === 0 ? '0.5rem' : '0',
                  borderTopRightRadius: index === columns.length - 1 ? '0.5rem' : '0',
                  fontFamily: 'sans-serif',
                }}
              >
                {col.header}
              </th>
            ))}
            {isAdmin && (
              <th
                className="px-4 py-2"
                style={{ borderTopRightRadius: '0.5rem' }}
              >
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white dark:bg-darkModeCard">
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="border dark:border-white dark:text-white border-black text-[1em] px-4 py-2"
                >
                  {row[col.accessor]}
                </td>
              ))}
              {isAdmin && (
                <td className="border  px-4 py-2 flex space-x-2">
                  <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Edit
                  </button>
                  <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        // eslint-disable-next-line react/prop-types
        total={data.length}
        onChange={handlePageChange}
        className="mt-4 justify-start dark:text-white"
      />
    </div>
  );
};

export default Table;
