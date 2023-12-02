import { useDispatch, useSelector } from 'react-redux';
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
      hello
      {JSON.stringify(currentProduct)}
    </div>
  );
}

export default App;
