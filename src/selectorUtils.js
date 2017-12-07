export const toSortedList = alerts =>
  Object.keys(alerts)
    .sort((a, b) => a.localeCompare(b))
    .map(id => alerts[id])
    .filter(alert => !_.isUndefined(alert));
