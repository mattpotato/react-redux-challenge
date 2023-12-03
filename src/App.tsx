import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductData } from './redux/productReducer';
import { RootState, useAppDispatch } from './redux/store';
import SidePanel from './components/SidePanel';

function App() {

  const dispatch = useAppDispatch();
  const { currentProduct } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch])

  return (
    <div className="flex flex-col h-screen bg-red-50">
      <div className="flex p-4 bg-blue-950">
        <img src="/stackline_logo.svg" alt="stackline logo" width={100}/>
      </div>
      <div className="flex h-full p-4 gap-4 bg-blue-50">
        <SidePanel />
        <div className="w-full">
          <div>Graph</div>
          <div>Table</div>
        </div>
      </div>
    </div>
  );
}

export default App;
