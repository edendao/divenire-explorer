// @mui
import { Card, Container, Tab, Tabs } from "@mui/material";
import { useMemo } from "react";

import Label from "../../components/Label";
// components
import Page from "../../components/Page";
// hooks
import { useTabs } from "../../hooks/useTabs";
// sections
import { SetListItem } from "../../sections/dashboard";

// ----------------------------------------------------------------------

const getTabColor = (current: string, value: string) =>
  current === value ? "primary" : "default";

const ITEMS = [
  {
    address: "0x1",
    shortcut: "",
    system: "system",
    price: 5,
    rating: 0,
    review: "review",
    name: "name",
  },
  {
    address: "0x2",
    shortcut: "",
    system: "system",
    price: 12,
    rating: 2,
    review: "review",
    name: "name",
  },
  {
    address: "0x3",
    shortcut: "",
    system: "system",
    price: 10,
    rating: 3,
    review: "review",
    name: "name",
  },
];

export default function DashboardIndex() {
  const { currentTab, onChangeTab } = useTabs("generator");

  const TABS = useMemo(
    () =>
      [
        {
          value: "generator",
          label: "Generators",
          color: getTabColor(currentTab, "generator"),
          count: 0,
        },
        {
          value: "methodology",
          label: "Methodologies",
          color: getTabColor(currentTab, "methodology"),
          count: 0,
        },
      ] as const,
    [currentTab],
  );

  return (
    <Page title="General: Dashboard">
      <Container maxWidth={false}>
        <Card>
          <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={currentTab}
            onChange={onChangeTab}
            sx={{ px: 2, bgcolor: "background.neutral" }}
          >
            {TABS.map(tab => (
              <Tab
                disableRipple
                key={tab.value}
                value={tab.value}
                icon={<Label color={tab.color}> {tab.count} </Label>}
                label={tab.label}
              />
            ))}
          </Tabs>
          {ITEMS.map(item => (
            <SetListItem key={item.address} data={item} />
          ))}
        </Card>
      </Container>
    </Page>
  );
}
