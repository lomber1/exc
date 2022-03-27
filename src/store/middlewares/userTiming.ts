/**
 * https://medium.com/@vcarl/performance-profiling-a-redux-app-c85e67bf84ae
 */
import { Middleware } from '@reduxjs/toolkit';

const userTiming: Middleware = () => (next) => (action) => {
  if (performance.mark === undefined) return next(action);
  performance.mark(`${action.type}_start`);
  const result = next(action);
  performance.mark(`${action.type}_end`);
  performance.measure(
    `${action.type}`,
    `${action.type}_start`,
    `${action.type}_end`,
  );
  return result;
};

export default userTiming;
