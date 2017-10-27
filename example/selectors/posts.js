// this is a facet selector, so it assumes a substate is available.

export default {
  selectDraft: () => posts => posts.get('draft', ''),
  selectLoading: () => posts => posts.get('loading', false),
};
