import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SidePanel = () => {
  const { currentProduct } = useSelector((state: RootState) => state.product)
  return (
    <div className="bg-white rounded-sm shadow-sm p-4 flex flex-col items-center gap-2 min-w-[400px] max-w-[400px]">
      <img src={currentProduct?.image} width={200} alt="Shark Ninja"/>
      <div className="font-bold text-center text-lg">{currentProduct?.title}</div>
      <div className="text-gray-400 text-center w-64 text-sm">{currentProduct?.subtitle}</div>
      <div className="flex w-full border border-gray-50"></div>
      <div className="flex gap-4 flex-wrap p-2 m-2">{currentProduct?.tags.map((tag) => <div key={tag} className="border py-1 px-6 rounded-sm text-sm">{tag}</div>)}</div>
      <div className="flex w-full border border-gray-50"></div>
    </div>
  )
}

export default SidePanel;