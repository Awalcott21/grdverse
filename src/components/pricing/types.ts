
import { LucideIcon } from "lucide-react";

export interface Package {
  id: number;
  title: string;
  icon: LucideIcon;
  price: string;
  timeline: string;
  cta: string;
  ctaLink: string;
  features: string[];
}
