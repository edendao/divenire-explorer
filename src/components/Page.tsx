import Head from "next/head";
import { forwardRef } from "react";
// @mui
import { Box, BoxProps } from "@mui/material";
// config
import { APP } from "../config";
// ----------------------------------------------------------------------

type PageProps = BoxProps & {
  meta?: React.ReactNode;
  title: string;
};

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = "", meta, ...other }, ref) => (
    <>
      <Head>
        <title>{`${title} | ${APP.title}`}</title>
        {meta}
      </Head>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  ),
);

export default Page;
