import React, { useCallback } from 'react';
import { WaykeProvider, WaykeSearch } from '@wayke-se/components-react'

function Index() {
  const onClickSearchItem = useCallback((id) => {
    console.log(id);
  }, []);

  return (
    <WaykeProvider {...ProviderSettings}>
      <WaykeSearch onClickSearchItem={onClickSearchItem} />
    </WaykeProvider>
  );
};

export default Index;