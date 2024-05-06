// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'meorphis-test-40/core';
import { APIResource } from 'meorphis-test-40/resource';
import * as ShipmentsAPI from 'meorphis-test-40/resources/testings/shipments';

export class Shipments extends APIResource {
  /**
   * Simulate a shipment tracking update, such as those that Bolt would ingest from
   * third-party shipping providers that would allow updating tracking and delivery
   * information to shipments associated with orders.
   */
  testingShipmentTrackingCreate(
    body: ShipmentTestingShipmentTrackingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/testing/shipments', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ShipmentTestingShipmentTrackingCreateParams {
  /**
   * The shipment's status.
   */
  status: 'in_transit' | 'cancelled' | 'failure' | 'delivered';

  /**
   * A list of tracking updates that contain the shipment's status, location, and any
   * unique messages.
   */
  tracking_details: Array<ShipmentTestingShipmentTrackingCreateParams.TrackingDetail>;

  /**
   * The carrier's tracking number for the shipment. Must be prefixed with
   * `MockBolt`.
   */
  tracking_number: string;

  /**
   * The shipment's actual or estimated delivery date.
   */
  delivery_date?: string;
}

export namespace ShipmentTestingShipmentTrackingCreateParams {
  export interface TrackingDetail {
    /**
     * The country associated this this set of tracking details, if any.
     */
    country_code?: string;

    /**
     * The tracking detail's timestamp.
     */
    event_date?: string;

    /**
     * The locality associated this this set of tracking details, if any.
     */
    locality?: string;

    /**
     * An arbitrary, human-readable message associated with this set of tracking
     * details.
     */
    message?: string;

    /**
     * The postal associated this this set of tracking details, if any.
     */
    postal_code?: string;

    /**
     * The region associated this this set of tracking details, if any.
     */
    region?: string;

    status?:
      | 'unknown'
      | 'pre_transit'
      | 'in_transit'
      | 'out_for_delivery'
      | 'delivered'
      | 'available_for_pickup'
      | 'return_to_sender'
      | 'failure'
      | 'cancelled'
      | 'error';
  }
}

export namespace Shipments {
  export import ShipmentTestingShipmentTrackingCreateParams = ShipmentsAPI.ShipmentTestingShipmentTrackingCreateParams;
}
