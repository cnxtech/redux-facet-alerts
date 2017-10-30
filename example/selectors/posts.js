export default {
  selectDraft: () => state => state.getIn(['posts', 'draft'], ''),
  selectLoading: () => state => state.getIn(['posts', 'loading'], false),
};
