type UPReturnType<E, R> = Promise<[E | null, R | null]>;

const usePromise = async <R = unknown, E = Error>(
  promise: Promise<unknown>,
  cb?: () => void,
): UPReturnType<E, R> => {
  try {
    const response = (await promise) as R;
    return [null, response];
  } catch (error) {
    return [error, null];
  } finally {
    if (cb) cb();
  }
};

export { usePromise };
