import makeRequest from "./utils/endpointUtils";
import endpoint from "./config/endpoint";
import constants from "./config/constants";
import rivraddon from "./";

it("should print message in console", () => {
  global.console = {
    log: jest.fn()
  };
  rivraddon.analytics.enableAnalytics();
  expect(global.console.log).toHaveBeenCalledWith(
    constants.enableAnalyticsLogOutput
  );
});

it("should call makeRequest.post when trackPbjsEvent is called", async () => {
  makeRequest.post = jest.fn(() => new Promise(resolve => resolve(true)));
  rivraddon.analytics.trackPbjsEvent({ eventType: "abc" });
  expect(makeRequest.post).toHaveBeenCalledWith(endpoint.tracker, {
    eventType: "abc"
  });
  expect(makeRequest.post).toHaveBeenCalledTimes(1);
  jest.clearAllMocks();
});
