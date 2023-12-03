import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SidePanel = () => {
  const { currentProduct } = useSelector((state: RootState) => state.product)
  return (
    <div className="bg-white rounded-sm shadow-sm p-4 flex flex-col items-center">
      <img src={currentProduct?.image} width={300} />
      <div className="font-bold text-center">{currentProduct?.title}</div>
      <div className="text-gray-500 text-center">{currentProduct?.subtitle}</div>
      <div className="flex gap-4 flex-wrap pt-4 m-2 border-t border-b border-gray-50">{currentProduct?.tags.map((tag) => <div key={tag} className="border p-2 rounded-sm">{tag}</div>)}</div>
    </div>
  )
}

export default SidePanel;