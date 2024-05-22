// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as PaymentMethodsAPI from './payment-methods';

export class PaymentMethods extends APIResource {
  /**
   * Delete an existing payment method. Deleting a payment method does not invalidate
   * transactions or orders that are associated with it.
   */
  delete(
    id: string,
    params: PaymentMethodDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { 'X-Publishable-Key': xPublishableKey } = params;
    return this._client.delete(`/account/payment-methods/${id}`, {
      ...options,
      headers: { Accept: '*/*', 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }

  /**
   * Add a payment method to a shopper's Bolt account Wallet. For security purposes,
   * this request must come from your backend because authentication requires the use
   * of your private key.<br /> **Note**: Before using this API, the credit card
   * details must be tokenized using Bolt's JavaScript library function, which is
   * documented in
   * [Install the Bolt Tokenizer](https://help.bolt.com/developers/references/bolt-tokenizer).
   */
  accountAddPaymentMethod(
    params: PaymentMethodAccountAddPaymentMethodParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentMethodAccountAddPaymentMethodResponse> {
    const { 'X-Publishable-Key': xPublishableKey, ...body } = params;
    return this._client.post('/account/payment-methods', {
      body,
      ...options,
      headers: { 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }
}

export interface PaymentMethodAccountAddPaymentMethodResponse {
  '.tag': 'credit_card';

  /**
   * The expiration date of the credit card. TODO TO MAKE EXPIRATION REUSABLE
   */
  expiration: string;

  /**
   * The last 4 digits of the credit card number.
   */
  last4: string;

  /**
   * The credit card network.
   */
  network: 'visa' | 'mastercard' | 'amex' | 'discover' | 'jcb' | 'unionpay' | 'alliancedata' | 'citiplcc';

  id?: string;

  /**
   * The ID of credit card's billing address
   */
  billing_address_id?: string;
}

export interface PaymentMethodDeleteParams {
  /**
   * The publicly viewable identifier used to identify a merchant division.
   */
  'X-Publishable-Key': string;
}

export interface PaymentMethodAccountAddPaymentMethodParams {
  /**
   * Body param: The Bolt token associated to the credit card.
   */
  token: string;

  /**
   * Body param:
   */
  '.tag': 'credit_card';

  /**
   * Body param: The credit card's billing address
   */
  billing_address:
    | PaymentMethodAccountAddPaymentMethodParams.AddressReferenceID
    | PaymentMethodAccountAddPaymentMethodParams.AddressReferenceExplicit;

  /**
   * Body param: The Bank Identification Number for the credit card. This is
   * typically the first 4-6 digits of the credit card number.
   */
  bin: string;

  /**
   * Body param: The expiration date of the credit card. TODO TO MAKE EXPIRATION
   * REUSABLE
   */
  expiration: string;

  /**
   * Body param: The last 4 digits of the credit card number.
   */
  last4: string;

  /**
   * Body param: The credit card network.
   */
  network: 'visa' | 'mastercard' | 'amex' | 'discover' | 'jcb' | 'unionpay' | 'alliancedata' | 'citiplcc';

  /**
   * Header param: The publicly viewable identifier used to identify a merchant
   * division.
   */
  'X-Publishable-Key': string;
}

export namespace PaymentMethodAccountAddPaymentMethodParams {
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
}

export namespace PaymentMethods {
  export import PaymentMethodAccountAddPaymentMethodResponse = PaymentMethodsAPI.PaymentMethodAccountAddPaymentMethodResponse;
  export import PaymentMethodDeleteParams = PaymentMethodsAPI.PaymentMethodDeleteParams;
  export import PaymentMethodAccountAddPaymentMethodParams = PaymentMethodsAPI.PaymentMethodAccountAddPaymentMethodParams;
}
