import {
  useCollapseDrawerController,
  CollapseDrawerContext,
} from '../hooks/useCollapseDrawer';

export default function CollapseDrawerProvider({
  children,
}: React.PropsWithChildren) {
  const value = useCollapseDrawerController();

  return (
    <CollapseDrawerContext.Provider value={value}>
      {children}
    </CollapseDrawerContext.Provider>
  );
}
