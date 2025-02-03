export type ConfigurationItem = {
  id: number;
  label: string;
  path: string;
};

export const CONFIGURATION_OPTIONS: ConfigurationItem[] = [
  {
    id: 1,
    label: "1 - Landscape",
    path: "test-1.json",
  },
  {
    id: 2,
    label: "2 - Portrait",
    path: "test-2.json",
  },
  {
    id: 3,
    label: "3 - Square",
    path: "test-3.json",
  },
];
