// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'meorphis-test-40/core';
import { APIResource } from 'meorphis-test-40/resource';
import * as WebhooksAPI from 'meorphis-test-40/resources/webhooks';

export class Webhooks extends APIResource {
  /**
   * Create a new webhook to receive notifications from Bolt about various events,
   * such as transaction status.
   */
  create(body: WebhookCreateParams, options?: Core.RequestOptions): Core.APIPromise<WebhookCreateResponse> {
    return this._client.put('/webhooks', { body, ...options });
  }

  /**
   * Retrieve information for an existing webhook.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<WebhookRetrieveResponse> {
    return this._client.get(`/webhooks/${id}`, options);
  }

  /**
   * Retrieve information about all existing webhooks.
   */
  list(params: WebhookListParams, options?: Core.RequestOptions): Core.APIPromise<WebhookListResponse> {
    const { 'X-Publishable-Key': xPublishableKey } = params;
    return this._client.get('/webhooks', {
      ...options,
      headers: { 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }

  /**
   * Delete an existing webhook. You will no longer receive notifications from Bolt
   * about its events.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/webhooks/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface WebhookCreateResponse {
  event: WebhookCreateResponse.EventGroup | WebhookCreateResponse.EventList;

  /**
   * The webhook's URL
   */
  url: string;

  /**
   * The webhook's ID
   */
  id?: string;

  /**
   * The time at which the webhook was created
   */
  created_at?: string;
}

export namespace WebhookCreateResponse {
  export interface EventGroup {
    '.tag': 'group';

    event_group: 'all';
  }

  export interface EventList {
    '.tag': 'list';

    event_list: Array<
      | 'payment'
      | 'credit'
      | 'capture'
      | 'void'
      | 'auth'
      | 'pending'
      | 'rejected_irreversible'
      | 'rejected_reversible'
      | 'failed_payment'
      | 'newsletter_subscription'
      | 'risk_insights'
      | 'credit_card_deleted'
    >;
  }
}

export interface WebhookRetrieveResponse {
  event: WebhookRetrieveResponse.EventGroup | WebhookRetrieveResponse.EventList;

  /**
   * The webhook's URL
   */
  url: string;

  /**
   * The webhook's ID
   */
  id?: string;

  /**
   * The time at which the webhook was created
   */
  created_at?: string;
}

export namespace WebhookRetrieveResponse {
  export interface EventGroup {
    '.tag': 'group';

    event_group: 'all';
  }

  export interface EventList {
    '.tag': 'list';

    event_list: Array<
      | 'payment'
      | 'credit'
      | 'capture'
      | 'void'
      | 'auth'
      | 'pending'
      | 'rejected_irreversible'
      | 'rejected_reversible'
      | 'failed_payment'
      | 'newsletter_subscription'
      | 'risk_insights'
      | 'credit_card_deleted'
    >;
  }
}

export interface WebhookListResponse {
  webhooks?: Array<WebhookListResponse.Webhook>;
}

export namespace WebhookListResponse {
  export interface Webhook {
    event: Webhook.EventGroup | Webhook.EventList;

    /**
     * The webhook's URL
     */
    url: string;

    /**
     * The webhook's ID
     */
    id?: string;

    /**
     * The time at which the webhook was created
     */
    created_at?: string;
  }

  export namespace Webhook {
    export interface EventGroup {
      '.tag': 'group';

      event_group: 'all';
    }

    export interface EventList {
      '.tag': 'list';

      event_list: Array<
        | 'payment'
        | 'credit'
        | 'capture'
        | 'void'
        | 'auth'
        | 'pending'
        | 'rejected_irreversible'
        | 'rejected_reversible'
        | 'failed_payment'
        | 'newsletter_subscription'
        | 'risk_insights'
        | 'credit_card_deleted'
      >;
    }
  }
}

export interface WebhookCreateParams {
  event: WebhookCreateParams.EventGroup | WebhookCreateParams.EventList;

  /**
   * The webhook's URL
   */
  url: string;
}

export namespace WebhookCreateParams {
  export interface EventGroup {
    '.tag': 'group';

    event_group: 'all';
  }

  export interface EventList {
    '.tag': 'list';

    event_list: Array<
      | 'payment'
      | 'credit'
      | 'capture'
      | 'void'
      | 'auth'
      | 'pending'
      | 'rejected_irreversible'
      | 'rejected_reversible'
      | 'failed_payment'
      | 'newsletter_subscription'
      | 'risk_insights'
      | 'credit_card_deleted'
    >;
  }
}

export interface WebhookListParams {
  /**
   * The publicly viewable identifier used to identify a merchant division.
   */
  'X-Publishable-Key': string;
}

export namespace Webhooks {
  export import WebhookCreateResponse = WebhooksAPI.WebhookCreateResponse;
  export import WebhookRetrieveResponse = WebhooksAPI.WebhookRetrieveResponse;
  export import WebhookListResponse = WebhooksAPI.WebhookListResponse;
  export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
  export import WebhookListParams = WebhooksAPI.WebhookListParams;
}
