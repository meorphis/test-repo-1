// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest41 from 'meorphis-test-41';
import { Response } from 'node-fetch';

const meorphisTest41 = new MeorphisTest41({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shipments', () => {
  test('testingShipmentTrackingCreate: only required params', async () => {
    const responsePromise = meorphisTest41.testings.shipments.testingShipmentTrackingCreate({
      status: 'in_transit',
      tracking_details: [{}, {}, {}],
      tracking_number: 'MockBolt-143292',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('testingShipmentTrackingCreate: required and optional params', async () => {
    const response = await meorphisTest41.testings.shipments.testingShipmentTrackingCreate({
      status: 'in_transit',
      tracking_details: [
        {
          event_date: '2014-08-21:T14:24:00Z',
          status: 'pre_transit',
          message: 'Billing information received',
          locality: 'San Francisco',
          region: 'CA',
          postal_code: 'string',
          country_code: 'US',
        },
        {
          event_date: '2014-08-21:T14:24:00Z',
          status: 'pre_transit',
          message: 'Billing information received',
          locality: 'San Francisco',
          region: 'CA',
          postal_code: 'string',
          country_code: 'US',
        },
        {
          event_date: '2014-08-21:T14:24:00Z',
          status: 'pre_transit',
          message: 'Billing information received',
          locality: 'San Francisco',
          region: 'CA',
          postal_code: 'string',
          country_code: 'US',
        },
      ],
      tracking_number: 'MockBolt-143292',
      delivery_date: '2019-12-27T18:11:19.117Z',
    });
  });
});
