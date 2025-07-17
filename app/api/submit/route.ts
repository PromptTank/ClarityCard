import { NextResponse } from 'next/server';
import { clarityFormSchema } from '@/lib/clarityFormSchema';
import { createAirtableRecord } from '@/lib/airtable';

// Helper function to log request details
function logRequestDetails(method: string, url: string, body: any) {
  console.log('=== API Request ===');
  console.log('Method:', method);
  console.log('URL:', url);
  console.log('Body:', JSON.stringify(body, null, 2));
  console.log('Environment Variables:', {
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID ? '***' : 'MISSING',
    AIRTABLE_TABLE_ID: process.env.AIRTABLE_TABLE_ID ? '***' : 'MISSING',
    AIRTABLE_TOKEN: process.env.AIRTABLE_TOKEN ? '***' : 'MISSING',
  });
  console.log('===================');
}

export async function POST(request: Request) {
  const url = new URL(request.url);
  
  try {
    // Log the incoming request
    const requestClone = request.clone();
    const body = await requestClone.json().catch(() => ({}));
    logRequestDetails('POST', url.pathname, body);
    // Check if request has a body
    if (!request.body) {
      return NextResponse.json(
        { error: 'Request body is required' },
        { status: 400 }
      );
    }

    // Use the already parsed body from the clone
    if (!body || Object.keys(body).length === 0) {
      console.error('Empty or invalid request body');
      return NextResponse.json(
        { error: 'Request body is required and must be valid JSON' },
        { status: 400 }
      );
    }
    
    // Validate the request body against schema
    const validation = clarityFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validation.error.format(),
          message: 'Please check your input and try again.'
        },
        { status: 400 }
      );
    }

    try {
      console.log('Attempting to create Airtable record with data:', validation.data);
      
      // Create record in Airtable
      const record = await createAirtableRecord(validation.data);
      
      console.log('Successfully created Airtable record:', record.id);
      
      return NextResponse.json({ 
        success: true, 
        recordId: record.id,
        message: 'Form submitted successfully!' 
      });
      
    } catch (error) {
      console.error('Airtable error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : 'UnknownError'
      });
      
      return NextResponse.json(
        { 
          error: 'Failed to save data',
          message: 'There was an error saving your information. Please try again later.',
          details: process.env.NODE_ENV === 'development' ? 
            (error instanceof Error ? error.message : 'Unknown error') : 
            undefined
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    );
  }
}
