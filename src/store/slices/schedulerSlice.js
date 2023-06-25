import { createSlice } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';

const schedulerSlice = createSlice({
  name: 'scheduler',
  initialState: [],
  reducers: {
    addComponent: (state, action) => {
      const { item, x, y } = action.payload;
      const newComponent = {
        ...item, keyId: uniqueId(), posX: x, posY: y,
      };
      state.push(newComponent);
    },
    editPositionComponent: (state, action) => {
      const { item, x, y } = action.payload;
      const component = state.find((c) => c.keyId === item.keyId);
      if (component) {
        component.posX = x;
        component.posY = y;
      }
    },
    deleteAll: () => [],
    importFile: (state, action) => {
      const array = action.payload;
      state.push(...array);
    },
  },
});

export const {
  addComponent,
  editPositionComponent,
  deleteAll,
  importFile,
} = schedulerSlice.actions;

export default schedulerSlice.reducer;
