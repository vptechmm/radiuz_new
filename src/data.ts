import { FeatureItem, TeamMember, OfficeLocation } from './types';
import findSNSLogo from '../assets/companylogo/FindSNS.png';
import mickyLogo from '../assets/companylogo/Micky.png';
import futureNetLogo from '../assets/companylogo/FutureNet.png';
import mandalarNetLogo from '../assets/companylogo/MandalarNet.png';
import triNetLogo from '../assets/companylogo/TriNet.png';
import luxnexCrowntzLogo from '../assets/companylogo/LuxnexCTZ.png';
import luxnexTachileikLogo from '../assets/companylogo/LuxnexTCL.png';
import luxnexAirWalkerLogo from '../assets/companylogo/airwalker-logo.jpeg';
import myanmarApnLogo from '../assets/companylogo/apn_blue.svg';

export const navigationItems = [
  { label: 'Features', id: 'features', isPage: false },
  { label: 'Pricing', id: 'pricing', isPage: false },
  { label: 'About Us', id: 'about', isPage: true },
];

export const logoCloud = [
  { name: 'Find SNS', logoSrc: findSNSLogo },
  { name: 'Micky Pakkoku', logoSrc: mickyLogo },
  { name: 'Future Net', logoSrc: futureNetLogo },
  { name: 'Mandalar Net', logoSrc: mandalarNetLogo },
  { name: 'Tri Net', logoSrc: triNetLogo },
  { name: 'Luxnex Crowntz', logoSrc: luxnexCrowntzLogo },
  { name: 'Luxnex Tachileik', logoSrc: luxnexTachileikLogo },
  { name: 'Luxnex Air Walker', logoSrc: luxnexAirWalkerLogo },
  { name: 'Myanmar APN', logoSrc: myanmarApnLogo },
];

export const featuresData: FeatureItem[] = [
  {
    id: 'crm',
    title: 'CRM',
    description: 'Centralize customer information, service history, and account management in one place.',
    iconName: 'Users',
    color: 'from-pink-500/20 to-purple-600/20 shadow-[0_8px_32px_0_rgba(236,72,153,0.15)] border-pink-500/20',
  },
  {
    id: 'sales-channels',
    title: 'Sales Channels',
    description: 'Manage branches, regions, dealers, or business units from a single platform. Track customers, subscriptions, and performance across multiple locations.',
    iconName: 'Globe',
    color: 'from-cyan-500/20 to-blue-600/20 shadow-[0_8px_32px_0_rgba(6,182,212,0.15)] border-cyan-500/20',
  },
  {
    id: 'task-management',
    title: 'Task Management',
    description: 'Track installations, maintenance, support requests, and operational workflows across your team.',
    iconName: 'ClipboardList',
    color: 'from-emerald-400/20 to-teal-600/20 shadow-[0_8px_32px_0_rgba(52,211,153,0.15)] border-emerald-500/10',
  },
  {
    id: 'billing',
    title: 'Billing',
    description: 'Automate invoicing, recurring charges, payment tracking, and account balances.',
    iconName: 'CreditCard',
    color: 'from-amber-400/20 to-orange-600/20 shadow-[0_8px_32px_0_rgba(251,191,36,0.15)] border-amber-500/15',
  },
  {
    id: 'subscription-management',
    title: 'Subscription Management',
    description: 'Manage internet plans, renewals, upgrades, suspensions, and service activations with ease.',
    iconName: 'Wifi',
    color: 'from-indigo-500/20 to-violet-600/20 shadow-[0_8px_32px_0_rgba(22,56,249,0.15)] border-indigo-500/20',
  },
  {
    id: 'messages',
    title: 'Messages',
    description: 'Keep customers informed with payment reminders, service updates, and important notifications.',
    iconName: 'MessageSquare',
    color: 'from-rose-500/20 to-red-600/20 shadow-[0_8px_32px_0_rgba(244,63,94,0.15)] border-rose-500/20',
  },
  {
    id: 'products',
    title: 'Products',
    description: 'Manage internet packages, equipment, add-ons, and service offerings from a centralized catalog.',
    iconName: 'Package',
    color: 'from-blue-500/20 to-indigo-600/20 shadow-[0_8px_32px_0_rgba(59,130,246,0.15)] border-blue-500/20',
  },
  {
    id: 'freeradius',
    title: 'FreeRADIUS',
    description: 'Automate subscriber authentication, authorization, and accounting (AAA) through seamless FreeRADIUS.',
    iconName: 'Server',
    color: 'from-purple-500/20 to-pink-600/20 shadow-[0_8px_32px_0_rgba(168,85,247,0.15)] border-purple-500/20',
  },
  {
    id: 'permissions',
    title: 'Permissions',
    description: 'Secure your business with role-based access control and customizable user permissions.',
    iconName: 'Lock',
    color: 'from-teal-500/20 to-emerald-600/20 shadow-[0_8px_32px_0_rgba(20,184,166,0.15)] border-teal-500/20',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 't1',
    name: 'Seraphina Vance',
    role: 'Chief Design Officer',
    bio: 'Pioneered experimental interface models in VR & Web, perfecting ambient physical properties of glassy layouts.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400',
    socials: {
      twitter: 'seraphina_v',
      linkedin: 'seraphina-vance',
      github: 'seraphinav',
    },
  },
  {
    id: 't2',
    name: 'Marcus Kaelen',
    role: 'Principal Interactive Architect',
    bio: 'Former GPU render engineer, specializing in real-time fluid logic systems and standard high-fidelity layout libraries.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    socials: {
      twitter: 'marcus_kae',
      github: 'mkaelen',
    },
  },
  {
    id: 't3',
    name: 'Amara Chen',
    role: 'Lead Systems Developer',
    bio: 'Passionate about structural grid scalability and isolating secure layout modules with sub-millisecond response latency.',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=400',
    socials: {
      linkedin: 'amara-chen-dev',
      github: 'amarachen',
    },
  },
  {
    id: 't4',
    name: 'David Vance',
    role: 'Venture & Growth Lead',
    bio: 'Translating refractive glass aesthetics into market metrics and building global operations across high-growth startups.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    socials: {
      twitter: 'david_vance',
      linkedin: 'davidvance-growth',
    },
  },
];

export const officeLocation: OfficeLocation = {
  city: 'Silicon Valley Headquarters',
  address: '100 Refraction Way, Suite 400, Glass Town, CA 94025',
  phone: '+1 (555) 733-7228 (REFRACT)',
  email: 'hello@aetherglass.com',
};
