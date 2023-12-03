import { useEffect } from 'react';
import { fetchProductData } from './redux/productReducer';
import { useAppDispatch } from './redux/store';
import SidePanel from './components/SidePanel';
import ProductTable from './components/ProductTable';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch])

  return (
    <div className="flex flex-col h-screen bg-red-50">
      <div className="flex p-4 bg-blue-950">
        <img src="/stackline_logo.svg" alt="stackline logo" width={100}/>
      </div>
      <div className="flex h-[calc(100vh-74px)] p-4 gap-4 bg-blue-50">
        <SidePanel />
        <div className="w-full overflow-scroll">
          <div>Graph</div>
          <ProductTable />
        </div>
      </div>
    </div>
  );
}

export default App;
