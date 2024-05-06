// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest43 from 'meorphis-test-40';
import { Response } from 'node-fetch';

const meorphisTest43 = new MeorphisTest43({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addresses', () => {
  test('update: only required params', async () => {
    const responsePromise = meorphisTest43.accounts.addresses.update('D4g3h5tBuVYK9', {
      country_code: 'US',
      first_name: 'Alice',
      last_name: 'Baker',
      locality: 'San Francisco',
      postal_code: '94105',
      street_address1: '535 Mission St, Ste 1401',
      'X-Publishable-Key': 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await meorphisTest43.accounts.addresses.update('D4g3h5tBuVYK9', {
      country_code: 'US',
      first_name: 'Alice',
      last_name: 'Baker',
      locality: 'San Francisco',
      postal_code: '94105',
      street_address1: '535 Mission St, Ste 1401',
      'X-Publishable-Key': 'string',
      company: 'ACME Corporation',
      email: 'alice@example.com',
      is_default: true,
      phone: '+14155550199',
      region: 'CA',
      street_address2: 'c/o Shipping Department',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = meorphisTest43.accounts.addresses.delete('D4g3h5tBuVYK9', {
      'X-Publishable-Key': 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await meorphisTest43.accounts.addresses.delete('D4g3h5tBuVYK9', {
      'X-Publishable-Key': 'string',
    });
  });

  test('accountAddressCreate: only required params', async () => {
    const responsePromise = meorphisTest43.accounts.addresses.accountAddressCreate({
      country_code: 'US',
      first_name: 'Alice',
      last_name: 'Baker',
      locality: 'San Francisco',
      postal_code: '94105',
      street_address1: '535 Mission St, Ste 1401',
      'X-Publishable-Key': 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('accountAddressCreate: required and optional params', async () => {
    const response = await meorphisTest43.accounts.addresses.accountAddressCreate({
      country_code: 'US',
      first_name: 'Alice',
      last_name: 'Baker',
      locality: 'San Francisco',
      postal_code: '94105',
      street_address1: '535 Mission St, Ste 1401',
      'X-Publishable-Key': 'string',
      company: 'ACME Corporation',
      email: 'alice@example.com',
      is_default: true,
      phone: '+14155550199',
      region: 'CA',
      street_address2: 'c/o Shipping Department',
    });
  });
});
