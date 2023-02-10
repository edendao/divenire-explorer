// @mui
import { Container } from "@mui/material";
import HeaderBreadcrumbs from "~/components/HeaderBreadcrumbs";
// components
import Page from "~/components/Page";
import { CONTRACTS } from "~/config";
// sections
import { Factory, FactoryNewEditForm } from "~/sections/factory";
// next
import { GetStaticPaths, GetStaticProps } from "next";

// ----------------------------------------------------------------------

type PageProps = {
  factory: Factory;
};

type FactoryDetail = { name: string };

const FACTORY: Record<Factory["type"], FactoryDetail> = {
  generators: { name: "Credit class" },
  methodologies: { name: "Methodology" },
};

// ----------------------------------------------------------------------

export default function FactoryNew({ factory }: PageProps) {
  const factoryDetails = FACTORY[factory.type];

  const heading = `Create a new ${factoryDetails.name}`;
  const handleSubmit = () => Promise.resolve();

  return (
    <Page title={`Factory: ${heading}`}>
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading={heading}
          links={[
            { name: "Factory" },
            {
              name: factoryDetails.name,
            },
            { name: "New " + factoryDetails.name },
          ]}
        />
        <FactoryNewEditForm factory={factory} onSubmit={handleSubmit} />
      </Container>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async context => {
  const factory = context.params?.factory?.toString() as
    | Factory["type"]
    | undefined;

  const address = factory && (CONTRACTS[factory] as `0x${string}`);

  if (!address) {
    return { notFound: true };
  }

  return {
    props: {
      factory: {
        type: factory,
        address,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { factory: "generators" } },
      { params: { factory: "methodologies" } },
    ],
    fallback: false,
  };
};
