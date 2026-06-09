export type ActiveTab = 'home' | 'about';

export interface NavItem {
  label: string;
  id: ActiveTab | string;
  isPage: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  color: string; // Gradient color spec for glass accent
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
