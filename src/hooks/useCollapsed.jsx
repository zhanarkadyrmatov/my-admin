import React, { useState } from 'react'

export const useCollapsed = () => {
  const [collapsed, setCollapsed] = useState(false);
  return [collapsed, setCollapsed]
}


