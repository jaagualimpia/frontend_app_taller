"use client"

import { Suspense } from 'react';
import DrawNumberMiniComponent from './pageComponent';


const DrawNumber = () => {
  return (
    <Suspense>
      <DrawNumberMiniComponent />
    </Suspense>
  );
};

export default DrawNumber;
