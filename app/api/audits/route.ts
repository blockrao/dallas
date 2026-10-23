import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { business_id, merchant_id } = body;

    if (!business_id || !merchant_id) {
      return NextResponse.json({
        success: false,
        error: 'business_id and merchant_id are required',
      }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('website_audits')
      .insert([{
        business_id,
        merchant_id,
        status: 'pending',
      }])
      .select()
      .single();

    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      data,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: String(error),
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const status = request.nextUrl.searchParams.get('status');
    const merchant_id = request.nextUrl.searchParams.get('merchant_id');
    const business_id = request.nextUrl.searchParams.get('business_id');

    let query = supabase.from('website_audits').select('*');

    if (status) {
      query = query.eq('status', status);
    }

    if (merchant_id) {
      query = query.eq('merchant_id', merchant_id);
    }

    if (business_id) {
      query = query.eq('business_id', business_id);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: data || [],
      count: data?.length || 0,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: String(error),
    }, { status: 500 });
  }
}
