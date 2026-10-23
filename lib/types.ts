export enum FieldSource {
  Manual = 'manual',
  GoogleMaps = 'google_maps',
  Website = 'website',
  UserSubmitted = 'user_submitted'
}

export enum VerificationMethod {
  Manual = 'manual',
  Automated = 'automated',
  UserVerified = 'user_verified'
}

export enum MerchantClaimStatus {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected',
  Disputed = 'disputed'
}

export enum MerchantRole {
  Owner = 'owner',
  Manager = 'manager',
  Editor = 'editor',
  Viewer = 'viewer'
}

export enum AuditStatus {
  Pending = 'pending',
  InProgress = 'in_progress',
  Completed = 'completed',
  Failed = 'failed'
}

export enum BusinessCategory {
  Restaurants = 'restaurants',
  HVAC = 'hvac',
  Plumbing = 'plumbing',
  Electrical = 'electrical',
  Construction = 'construction',
  ProfessionalServices = 'professional_services',
  Retail = 'retail',
  Healthcare = 'healthcare',
  Education = 'education'
}

export interface Business {
  id: string;
  name: string;
  description?: string;
  category: BusinessCategory;
  website_url?: string;
  phone?: string;
  email?: string;
  latitude: number;
  longitude: number;
  address: string;
  claimed_by_merchant_id?: string;
  verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface BusinessFieldValue {
  id: string;
  business_id: string;
  field_name: string;
  field_value: any;
  source: FieldSource;
  verification_method: VerificationMethod;
  verified: boolean;
  confidence_score: number;
  created_at: string;
}

export interface BusinessFieldHistory {
  id: string;
  business_field_value_id: string;
  old_value: any;
  new_value: any;
  changed_by: string;
  created_at: string;
}

export interface MerchantAccount {
  id: string;
  email: string;
  business_name: string;
  phone?: string;
  verified: boolean;
  created_at: string;
}

export interface BusinessClaim {
  id: string;
  business_id: string;
  merchant_id: string;
  status: MerchantClaimStatus;
  claimed_at: string;
  verified_at?: string;
  dispute_reason?: string;
}

export interface MerchantPermission {
  id: string;
  merchant_id: string;
  business_id: string;
  role: MerchantRole;
  granted_at: string;
}

export interface WebsiteAudit {
  id: string;
  business_id: string;
  merchant_id: string;
  status: AuditStatus;
  website_url: string;
  findings: any;
  created_at: string;
  completed_at?: string;
}

export interface EditorialContent {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  published_at: string;
  updated_at: string;
}

export interface EditorialBusinessMention {
  id: string;
  editorial_content_id: string;
  business_id: string;
  is_sponsored: boolean;
}

export interface ServiceLead {
  id: string;
  email: string;
  phone?: string;
  business_name: string;
  website_url?: string;
  service_type: string;
  created_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
