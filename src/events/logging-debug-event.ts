import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";

export interface LoggingDebugEvent {
  exchange: Exchanges.LoggingDebug;
  routingKey: RoutingKeys.Logging;
  data: {
    serviceName: string;
    className?: string;
    functionName?: string;
    debug: any;
  };
}
