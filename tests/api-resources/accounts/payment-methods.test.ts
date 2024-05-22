// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest41 from 'meorphis-test-41';
import { Response } from 'node-fetch';

const meorphisTest41 = new MeorphisTest41({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentMethods', () => {
  test('delete: only required params', async () => {
    const responsePromise = meorphisTest41.accounts.paymentMethods.delete('D4g3h5tBuVYK9', {
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
    const response = await meorphisTest41.accounts.paymentMethods.delete('D4g3h5tBuVYK9', {
      'X-Publishable-Key': 'string',
    });
  });

  test('accountAddPaymentMethod: only required params', async () => {
    const responsePromise = meorphisTest41.accounts.paymentMethods.accountAddPaymentMethod({
      token: 'a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0',
      '.tag': 'credit_card',
      billing_address: { '.tag': 'id', id: 'D4g3h5tBuVYK9' },
      bin: '411111',
      expiration: '2025-03',
      last4: '1004',
      network: 'visa',
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

  test('accountAddPaymentMethod: required and optional params', async () => {
    const response = await meorphisTest41.accounts.paymentMethods.accountAddPaymentMethod({
      token: 'a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0',
      '.tag': 'credit_card',
      billing_address: { '.tag': 'id', id: 'D4g3h5tBuVYK9' },
      bin: '411111',
      expiration: '2025-03',
      last4: '1004',
      network: 'visa',
      'X-Publishable-Key': 'string',
    });
  });
});
