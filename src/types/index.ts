export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  solutions: string[];
  image: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Region {
  name: string;
  departements: string[];
}

export interface StarlinkFormData {
  fullName: string;
  phone: string;
  email: string;
  region: string;
  departement: string;
  address: string;
  message: string;
  latitude: string;
  longitude: string;
}

export interface GeoPosition {
  latitude: number;
  longitude: number;
  accuracy: number;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}
