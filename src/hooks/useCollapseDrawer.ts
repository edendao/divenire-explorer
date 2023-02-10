import { createContext, useState, useEffect, useContext, useMemo } from 'react';
// hooks
import { useResponsive } from './useResponsive';

// ----------------------------------------------------------------------

export type CollapseDrawerContextProps = {
  isCollapse: boolean;
  collapseClick: boolean;
  collapseHover: boolean;
  onToggleCollapse: VoidFunction;
  onHoverEnter: VoidFunction;
  onHoverLeave: VoidFunction;
};

const initialState: CollapseDrawerContextProps = {
  isCollapse: false,
  collapseClick: false,
  collapseHover: false,
  onToggleCollapse: () => {},
  onHoverEnter: () => {},
  onHoverLeave: () => {},
};

export const CollapseDrawerContext = createContext(initialState);

export function useCollapseDrawerController() {
  const isDesktop = useResponsive('up', 'lg');

  const [collapse, setCollapse] = useState({
    click: false,
    hover: false,
  });

  useEffect(() => {
    if (!isDesktop) {
      setCollapse({
        click: false,
        hover: false,
      });
    }
  }, [isDesktop]);

  return useMemo(() => {
    const handleToggleCollapse = () => {
      setCollapse({ ...collapse, click: !collapse.click });
    };

    const handleHoverEnter = () => {
      if (collapse.click) {
        setCollapse({ ...collapse, hover: true });
      }
    };

    const handleHoverLeave = () => {
      setCollapse({ ...collapse, hover: false });
    };

    return {
      isCollapse: collapse.click && !collapse.hover,
      collapseClick: collapse.click,
      collapseHover: collapse.hover,
      onToggleCollapse: handleToggleCollapse,
      onHoverEnter: handleHoverEnter,
      onHoverLeave: handleHoverLeave,
    };
  }, [collapse]);
}

export function useCollapseDrawer() {
  return useContext(CollapseDrawerContext);
}
