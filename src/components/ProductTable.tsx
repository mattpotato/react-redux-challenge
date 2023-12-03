import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ProductTable = () => {
  const { currentProduct } = useSelector((state: RootState) => state.product);

  const headers = ["Week Ending", "Retail Sales", "Wholesale Sales", "Units Sold", "Retailer Margin"]

  return (
    <table className="bg-white w-full shadow">
      <thead className="p-4">
        {headers.map((header) => {
          return (
            <th key={header} className="text-start p-4">{header}</th>
          )
        })}
      </thead>
      <tbody>
        {currentProduct?.sales.map((sale) => {
          return (
            <tr key={sale.weekEnding}>
              <td className="p-4">{sale.weekEnding}</td>
              <td className="p-4">{sale.retailSales}</td>
              <td className="p-4">{sale.wholesaleSales}</td>
              <td className="p-4">{sale.unitsSold}</td>
              <td className="p-4">{sale.retailerMargin}</td>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}

export default ProductTable;

