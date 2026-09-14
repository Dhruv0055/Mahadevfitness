export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  span?: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  description: string;
  priceNote: string;
  features: string[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  verified: boolean;
  timeAgo?: string;
}

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  fitnessGoal: string;
  preferredContact: string;
  message?: string;
}
