import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import format from "date-fns/format";
import { parseISO } from "date-fns";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useState } from "react";


const ProductTable = () => {
  const { currentProduct } = useSelector((state: RootState) => state.product);

  const headers = [
    {
      id: "weekEnding",
      label: "Week Ending",
    },
    {
      id: "retailSales",
      label: "Retail Sales",
    },
    {
      id: "wholesaleSales",
      label: "Wholesale Sales",
    },
    {
      id: "unitsSold",
      label: "Units Sold",
    },
    {
      id: "retailerMargin",
      label: "Retailer Margin",
    },
  ]

  const salesData = currentProduct?.sales ?? [];

  const [sortBy, setSortBy] = useState(headers[0].id);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };


  const sortedData = [...salesData ?? []].sort((a, b) => {
    const aValue = (a as any)[sortBy];
    const bValue = (b as any)[sortBy];


    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  })

  console.log({ sortedData })


  return (
    <table className="bg-white w-full shadow">
      <thead className="p-4">
        <tr>
          {headers.map((header) => {
            return (
              <th key={header.id} className="text-start p-4 text-md font-normal" onClick={() => handleSort(header.id)}>
                <div className="flex content-center items-center center select-none cursor-pointer">
                  {header.label} 
                  {sortBy === header.id && (sortOrder === "asc" ? <FaSortUp className="ml-2"/> : <FaSortDown className="ml-2" />)}
                </div>
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((sale) => {
          return (
            <tr key={sale.weekEnding} className="text-gray-400">
              <td className="p-4">{format(parseISO(sale.weekEnding), "MM-dd-yy")}</td>
              <td className="p-4">${sale.retailSales}</td>
              <td className="p-4">${sale.wholesaleSales}</td>
              <td className="p-4">{sale.unitsSold}</td>
              <td className="p-4">${sale.retailerMargin}</td>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}

export default ProductTable;

