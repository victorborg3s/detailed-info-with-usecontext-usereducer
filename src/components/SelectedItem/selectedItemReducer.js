import { oxfordDictionariesApi } from '../../api';

const selectedItemReducer = (state, action) => {
	switch (action.type) {
    case "SELECT_ITEM": {
			const definition = oxfordDictionariesApi.getDefinition(action.term);
			return {
				kind: 'definition',
				title: action.term,
				detail: definition,
			};
		}
    default:
    return state;
	}
};

export default selectedItemReducer;
