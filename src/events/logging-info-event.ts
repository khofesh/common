import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";

export interface LoggingInfoEvent {
  exchange: Exchanges.LoggingInfo;
  routingKey: RoutingKeys.Logging;
  data: {
    serviceName: string;
    className?: string;
    functionName?: string;
    info: string;
  };
}
