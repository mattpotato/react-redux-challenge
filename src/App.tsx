import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductData } from './redux/productReducer';
import { RootState, useAppDispatch } from './redux/store';

function App() {

  const dispatch = useAppDispatch();
  const { currentProduct } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch])

  return (
    <div>
      <div className="flex p-4 bg-blue-950">
        <img src="/stackline_logo.svg" alt="stackline logo" width={100}/>
      </div>
      <div className="flex p-4 gap-4">
        <div>Sidebar</div>
        <div className="w-full">
          <div>Graph</div>
          <div>Table</div>
        </div>
      </div>
    </div>
  );
}

export default App;
