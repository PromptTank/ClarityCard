import { AirtableRecord, ClarityFormData } from "./clarityFormSchema";

// Get Airtable configuration from environment variables
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID; // Your Airtable base ID
const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID; // Your Airtable table ID (not the display name)
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN; // Your Airtable API token

if (!AIRTABLE_BASE_ID || !AIRTABLE_TABLE_ID || !AIRTABLE_TOKEN) {
  console.error("Missing required Airtable environment variables");
}

export async function createAirtableRecord(
  data: ClarityFormData
): Promise<AirtableRecord> {
  console.log("createAirtableRecord called with data:", data);

  if (!AIRTABLE_BASE_ID || !AIRTABLE_TOKEN || !AIRTABLE_TABLE_ID) {
    const missing = [];
    if (!AIRTABLE_BASE_ID) missing.push("AIRTABLE_BASE_ID");
    if (!AIRTABLE_TABLE_ID) missing.push("AIRTABLE_TABLE_ID");
    if (!AIRTABLE_TOKEN) missing.push("AIRTABLE_TOKEN");

    const errorMsg = `Missing required Airtable configuration: ${missing.join(
      ", "
    )}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`;

  // Prepare the request body with exact field names from Airtable
  const requestBody = {
    fields: {
      // 'Field ID': value
      fldFSx15x6230nBu8: data.email, // Email
      fldvlRZwfEaS1rAWn: data.role, // Your Role / Job Title
      fldMD75JTW1tH0GOy: data.industry, // Industry / Sector
      fldNSqqR71Qw80rxX: data.workflow, // Workflow to Improve or Delegate
      fldFeOfbL9FokLKNQ: data.frequency, // How Often You Do This
      flde89VawLQvU7A1g: data.painPoint, // Biggest Pain Point
      fldGP0nxuDQDmNpG5: data.tools, // Tools or Platforms You Use Today
    }, // Removed Status field as it's not in the Airtable schema
  };

  console.log("Sending to Airtable:", {
    url,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ***", // Don't log the actual token
    },
    body: requestBody,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    let errorDetails;
    let responseText;

    try {
      responseText = await response.text();
      errorDetails = JSON.parse(responseText);
    } catch (e) {
      errorDetails = responseText || "Failed to parse error response";
    }

    console.error("Airtable API error details:", {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      requestBody: requestBody,
      responseHeaders: Object.fromEntries(response.headers.entries()),
      responseBody: errorDetails,
      rawResponse: responseText,
    });

    // Try to extract a more specific error message
    let errorMessage = `Failed to create record in Airtable: ${response.status} ${response.statusText}`;
    if (typeof errorDetails === "object" && errorDetails.error) {
      errorMessage += ` - ${errorDetails.error.type || ""} ${
        errorDetails.error.message || ""
      }`.trim();
    } else if (typeof errorDetails === "string") {
      errorMessage += ` - ${errorDetails}`;
    }

    throw new Error(errorMessage);
  }

  return response.json();
}
