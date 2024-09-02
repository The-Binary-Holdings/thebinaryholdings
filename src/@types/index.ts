export type SubHeaderItem = {
  title: string;
  href: string;
  isBlank: boolean;
};

export type HeaderItem = {
  type: "button" | "dropdown";
  title: string;
  href: string | null;
  subHeaderItems: SubHeaderItem[];
};
