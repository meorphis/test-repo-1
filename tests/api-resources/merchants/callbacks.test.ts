// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest43 from 'meorphis-test-40';
import { Response } from 'node-fetch';

const meorphisTest43 = new MeorphisTest43({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource callbacks', () => {
  test('list: only required params', async () => {
    const responsePromise = meorphisTest43.merchants.callbacks.list({ 'X-Publishable-Key': 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await meorphisTest43.merchants.callbacks.list({ 'X-Publishable-Key': 'string' });
  });

  test('merchantCallbacksUpdate: only required params', async () => {
    const responsePromise = meorphisTest43.merchants.callbacks.merchantCallbacksUpdate({
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

  test('merchantCallbacksUpdate: required and optional params', async () => {
    const response = await meorphisTest43.merchants.callbacks.merchantCallbacksUpdate({
      'X-Publishable-Key': 'string',
      account_page: 'https://www.example.com/account',
      base_domain: 'https://www.example.com/',
      confirmation_redirect: 'https://www.example.com/bolt/redirect',
      create_order: 'https://www.example.com/bolt/order',
      debug: 'https://www.example.com/bolt/debug',
      get_account: 'https://www.example.com/bolt/account',
      mobile_app_domain: 'https://m.example.com/',
      oauth_logout: 'https://www.example.com/bolt/logout',
      oauth_redirect: 'https://www.example.com/bolt/oauth',
      privacy_policy: 'https://www.example.com/privacy-policy',
      product_info: 'https://www.example.com/bolt/product',
      remote_api: 'https://www.example.com/bolt/remote-api',
      shipping: 'https://www.example.com/bolt/shipping',
      support_page: 'https://www.example.com/help',
      tax: 'https://www.example.com/bolt/tax',
      terms_of_service: 'https://www.example.com/terms-of-service',
      universal_merchant_api: 'https://www.example.com/bolt/merchant-api',
      update_cart: 'https://www.example.com/bolt/cart',
      validate_additional_account_data: 'https://www.example.com/bolt/validate-account',
    });
  });
});
