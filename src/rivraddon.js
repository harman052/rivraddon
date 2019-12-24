var rivraddon = {
  analytics: {
    enableAnalytics: function() {
      console.log(
        "SIMPLAEX CODE CHALLENGE LOG rivraddonanalytics.enableAnalytics"
      );
    },
    trackPbjsEvent: function({ eventType }) {
      makeRequest
        .post(endpoint.tracker, { eventType })
        .then(function(response) {
          /** Use response or simply discard */
          console.log(response);
        })
        .catch(function(error) {
          /** Handle errors gracefully */
          console.error("An error occurred", error.statusText);
        });
    }
  }
};
