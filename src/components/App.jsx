import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageGallery from './ImageGallery/ImageGallery';
import { getPicturesThunk } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.pictures);
  
  useEffect(() => {
    dispatch(getPicturesThunk());
  }, [dispatch]);
  
    return (
      <div>
          {isLoading && <b>Loading pictures...</b>}
          {error && <b>{error}</b>}
          {items.hits?.length > 0 && <ImageGallery items={items.hits}/>}      
      </div>
    )
}


