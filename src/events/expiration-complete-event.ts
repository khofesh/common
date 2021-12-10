import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";

export interface ExpirationCompleteEvent {
  exchange: Exchanges.ExpirationComplete;
  routingKey: RoutingKeys.Expiration;
  data: {
    orderId: string;
  };
}
