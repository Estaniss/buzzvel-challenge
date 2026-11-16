export interface CourseCategory {
  number: string;
  title: string;
  description: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
