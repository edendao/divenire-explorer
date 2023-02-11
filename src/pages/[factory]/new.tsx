// @mui
import { Container } from '@mui/material';
// config
import { CONTRACTS } from '../../config';
// components
import Page from "../../components/Page";
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs";
// sections
import { FactoryNewEditForm, Factory } from '../../sections/factory';
// next
import { GetStaticPaths, GetStaticProps } from "next";

// ----------------------------------------------------------------------

type PageProps = {
  factory: Factory;
};

type FactoryDetail = { name: string };

const FACTORY: Record<Factory['type'], FactoryDetail> = {
  generators: { name: 'Claim class' },
  methodologies: { name: 'Methodology' },
};

// ----------------------------------------------------------------------

export default function FactoryNew({ factory }: PageProps) {
  const factoryDetails = FACTORY[factory.type];
  const heading = `Create a new ${factoryDetails.name}`;

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
        <FactoryNewEditForm factory={factory} />
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
