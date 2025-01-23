interface GetSliceData<T> {
  slice: T;
  mockedData: any;
}

export const sliceUtils = {
  getSliceData<T>({ mockedData, slice }: GetSliceData<T>): T {
    const typedSlice = slice as any;
    const slicePrimaryValues = Object.values(typedSlice.primary as any);
    const hasAnyPrimaryValues = slicePrimaryValues.some((value) => !!value);
    const hasAnyValue = hasAnyPrimaryValues || typedSlice.items.length > 0;

    return hasAnyValue ? slice : mockedData[0];
  },
};
