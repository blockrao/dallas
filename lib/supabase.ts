import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function searchBusinesses(query: string) {
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .ilike('name', `%${query}%`)
    .limit(20);
  return { data, error };
}

export async function getBusiness(id: string) {
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
}

export async function getBusinessesByCategory(category: string) {
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .eq('category', category)
    .limit(50);
  return { data, error };
}

export async function createBusiness(business: any) {
  const { data, error } = await supabase
    .from('businesses')
    .insert([business])
    .select()
    .single();
  return { data, error };
}

export async function updateBusinessField(businessId: string, fieldName: string, fieldValue: any) {
  const { data, error } = await supabase
    .from('business_field_values')
    .insert([{
      business_id: businessId,
      field_name: fieldName,
      field_value: fieldValue,
      source: 'manual',
      verified: false
    }])
    .select()
    .single();
  return { data, error };
}

export async function createMerchantAccount(merchantData: any) {
  const { data, error } = await supabase
    .from('merchant_accounts')
    .insert([merchantData])
    .select()
    .single();
  return { data, error };
}

export async function getMerchantBusinesses(merchantId: string) {
  const { data, error } = await supabase
    .from('business_claims')
    .select('*, businesses(*)')
    .eq('merchant_id', merchantId)
    .eq('status', 'approved');
  return { data, error };
}

export async function claimBusiness(businessId: string, merchantId: string) {
  const { data, error } = await supabase
    .from('business_claims')
    .insert([{
      business_id: businessId,
      merchant_id: merchantId,
      status: 'pending'
    }])
    .select()
    .single();
  return { data, error };
}

export async function approveClaim(claimId: string) {
  const { data, error } = await supabase
    .from('business_claims')
    .update({ status: 'approved' })
    .eq('id', claimId)
    .select()
    .single();
  return { data, error };
}

export async function grantPermission(merchantId: string, businessId: string, role: string) {
  const { data, error } = await supabase
    .from('merchant_permissions')
    .insert([{
      merchant_id: merchantId,
      business_id: businessId,
      role: role
    }])
    .select()
    .single();
  return { data, error };
}

export async function createWebsiteAudit(businessId: string, merchantId: string) {
  const { data, error } = await supabase
    .from('website_audits')
    .insert([{
      business_id: businessId,
      merchant_id: merchantId,
      status: 'pending'
    }])
    .select()
    .single();
  return { data, error };
}

export async function completeWebsiteAudit(auditId: string, findings: any) {
  const { data, error } = await supabase
    .from('website_audits')
    .update({
      status: 'completed',
      findings: findings
    })
    .eq('id', auditId)
    .select()
    .single();
  return { data, error };
}

export async function createServiceLead(leadData: any) {
  const { data, error } = await supabase
    .from('service_leads')
    .insert([leadData])
    .select()
    .single();
  return { data, error };
}

export async function getServiceLeads() {
  const { data, error } = await supabase
    .from('service_leads')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
}

export async function publishArticle(articleData: any) {
  const { data, error } = await supabase
    .from('editorial_content')
    .insert([articleData])
    .select()
    .single();
  return { data, error };
}

export async function mentionBusinessInArticle(articleId: string, businessId: string, isSponsored: boolean = false) {
  const { data, error } = await supabase
    .from('editorial_business_mentions')
    .insert([{
      editorial_content_id: articleId,
      business_id: businessId,
      is_sponsored: isSponsored
    }])
    .select()
    .single();
  return { data, error };
}
