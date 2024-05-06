// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest42 from 'meorphis-test-40';
import { Response } from 'node-fetch';

const meorphisTest42 = new MeorphisTest42({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  test('guestPaymentsInitialize: only required params', async () => {
    const responsePromise = meorphisTest42.guests.payments.guestPaymentsInitialize({
      cart: { amounts: { total: 10000, currency: 'USD' }, order_reference: 'order_100' },
      payment_method: { '.tag': 'paypal', success: 'https://example.com', cancel: 'https://example.com' },
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

  test('guestPaymentsInitialize: required and optional params', async () => {
    const response = await meorphisTest42.guests.payments.guestPaymentsInitialize({
      cart: {
        amounts: { total: 10000, currency: 'USD', tax: 1000 },
        order_reference: 'order_100',
        order_description: 'Order #1234567890',
        display_id: '215614191',
        shipments: [
          {
            address: { '.tag': 'id', id: 'D4g3h5tBuVYK9' },
            cost: { total: 10000, currency: 'USD', tax: 900 },
            carrier: 'FedEx',
          },
        ],
        discounts: [
          {
            amounts: { total: 10000, currency: 'USD', tax: 900 },
            code: 'SUMMER10DISCOUNT',
            details_url: 'https://www.example.com/SUMMER-SALE',
          },
        ],
        items: [
          {
            name: 'Bolt Swag Bag',
            reference: 'item_100',
            description: 'Large tote with Bolt logo.',
            total_amount: 9000,
            unit_price: 1000,
            quantity: 9,
            image_url: 'https://www.example.com/products/123456/images/1.png',
          },
        ],
      },
      payment_method: { '.tag': 'paypal', success: 'https://example.com', cancel: 'https://example.com' },
      'X-Publishable-Key': 'string',
    });
  });
});
