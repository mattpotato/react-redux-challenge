import { useEffect } from 'react';
import { fetchProductData } from './redux/productReducer';
import { useAppDispatch } from './redux/store';
import SidePanel from './components/SidePanel';
import ProductTable from './components/ProductTable';
import Graph from './components/Graph';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch])

  return (
    <div className="flex flex-col h-screen bg-blue-50">
      <div className="flex p-4 bg-blue-950">
        <img src="/stackline_logo.svg" alt="stackline logo" width={100}/>
      </div>
      <div className="flex h-[calc(100vh-74px)] px-4 pt-16 gap-4">
        <SidePanel />
        <div className="flex flex-col gap-4 w-full overflow-y-scroll overflow-x-hidden">
          <Graph />
          <div className="mr-4">
            <ProductTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
