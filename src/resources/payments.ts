// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'meorphis-test-40/core';
import { APIResource } from 'meorphis-test-40/resource';
import * as PaymentsAPI from 'meorphis-test-40/resources/payments';

export class Payments extends APIResource {
  /**
   * Initialize a Bolt payment token that will be used to reference this payment to
   * Bolt when it is updated or finalized for logged in shoppers.
   */
  create(params: PaymentCreateParams, options?: Core.RequestOptions): Core.APIPromise<PaymentCreateResponse> {
    const { 'X-Publishable-Key': xPublishableKey, ...body } = params;
    return this._client.post('/payments', {
      body,
      ...options,
      headers: { 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }
}

export interface PaymentCreateResponse {
  id?: string;

  action?: PaymentCreateResponse.Action;

  status?: 'awaiting_user_confirmation' | 'payment_ready' | 'update_payment_method' | 'success';
}

export namespace PaymentCreateResponse {
  export interface Action {
    method?: 'GET' | 'POST';

    type?: 'redirect' | 'finalize';

    url?: string;
  }
}

export interface PaymentCreateParams {
  /**
   * Body param:
   */
  cart: PaymentCreateParams.Cart;

  /**
   * Body param:
   */
  payment_method: PaymentCreateParams.PaymentMethod;

  /**
   * Header param: The publicly viewable identifier used to identify a merchant
   * division.
   */
  'X-Publishable-Key': string;
}

export namespace PaymentCreateParams {
  export interface Cart {
    amounts: Cart.Amounts;

    /**
     * This value is used by Bolt as an external reference to a given order. This
     * reference must be unique per successful transaction.
     */
    order_reference: string;

    discounts?: Array<Cart.Discount>;

    /**
     * This field corresponds to the merchant's order reference associated with this
     * Bolt transaction.
     */
    display_id?: string;

    items?: Array<Cart.Item>;

    /**
     * Used optionally to pass additional information like order numbers or other IDs
     * as needed.
     */
    order_description?: string;

    shipments?: Array<Cart.Shipment>;
  }

  export namespace Cart {
    export interface Amounts {
      currency: string;

      /**
       * The total amount, in cents, including its items and taxes (if applicable).
       */
      total: number;

      /**
       * The total tax amount, in cents for all of the items associated with the cart.
       */
      tax?: number;
    }

    export interface Discount {
      amounts: Discount.Amounts;

      /**
       * Discount code.
       */
      code?: string;

      /**
       * Used to provide a link to additional details, such as a landing page, associated
       * with the discount offering.
       */
      details_url?: string;
    }

    export namespace Discount {
      export interface Amounts {
        currency: string;

        /**
         * The total amount, in cents, including its items and taxes (if applicable).
         */
        total: number;

        /**
         * The total tax amount, in cents for all of the items associated with the cart.
         */
        tax?: number;
      }
    }

    export interface Item {
      /**
       * The name of a given item.
       */
      name: string;

      /**
       * The number of units that comprise this cart item.
       */
      quantity: number;

      /**
       * This value is used by Bolt as an external reference to a given item.
       */
      reference: string;

      /**
       * The total amount, in cents, of the item including its taxes if applicable.
       */
      total_amount: number;

      /**
       * The price of one unit of the item; for example, the price of one pack of socks.
       */
      unit_price: number;

      /**
       * A human-readable description of this cart item.
       */
      description?: string;

      /**
       * Used to provide a link to the image associated with the item.
       */
      image_url?: string;
    }

    export interface Shipment {
      /**
       * The Address object is used for shipping, and physical store address use cases.
       */
      address?: Shipment.AddressReferenceID | Shipment.AddressReferenceExplicit;

      /**
       * The name of the carrier selected.
       */
      carrier?: string;

      cost?: Shipment.Cost;
    }

    export namespace Shipment {
      export interface AddressReferenceID {
        /**
         * The address's ID
         */
        id: string;

        /**
         * The type of address reference
         */
        '.tag': 'id';
      }

      export interface AddressReferenceExplicit {
        /**
         * The type of address reference
         */
        '.tag': 'explicit';

        country_code: string;

        first_name: string;

        last_name: string;

        locality: string;

        postal_code: string;

        street_address1: string;

        company?: string;

        email?: string;

        phone?: string;

        region?: string;

        street_address2?: string;
      }

      export interface Cost {
        currency: string;

        /**
         * The total amount, in cents, including its items and taxes (if applicable).
         */
        total: number;

        /**
         * The total tax amount, in cents for all of the items associated with the cart.
         */
        tax?: number;
      }
    }
  }

  export interface PaymentMethod {
    /**
     * Payment ID of the saved Bolt Payment method.
     */
    id: string;

    '.tag': 'saved_payment_method';
  }
}

export namespace Payments {
  export import PaymentCreateResponse = PaymentsAPI.PaymentCreateResponse;
  export import PaymentCreateParams = PaymentsAPI.PaymentCreateParams;
}
