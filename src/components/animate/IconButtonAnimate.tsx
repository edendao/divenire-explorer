import { m } from "framer-motion";
import { forwardRef, ReactNode } from "react";
// @mui
import { Box, IconButton, IconButtonProps } from "@mui/material";

// ----------------------------------------------------------------------

const IconButtonAnimate = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButtonAnimateInner(
    { children, size = 'medium', ...other },
    ref
  ) {
    return (
      <AnimateWrap size={size}>
        <IconButton size={size} ref={ref} {...other}>
          {children}
        </IconButton>
      </AnimateWrap>
    );
  }
);

export default IconButtonAnimate;

// ----------------------------------------------------------------------

type AnimateWrapProp = {
  children: ReactNode;
  size: "small" | "medium" | "large";
};

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

function AnimateWrap({ size, children }: AnimateWrapProp) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: "inline-flex",
      }}
    >
      {children}
    </Box>
  );
}
