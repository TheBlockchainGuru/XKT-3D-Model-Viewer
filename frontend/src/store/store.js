import create from "zustand";
import produce from "immer";

const store = create(set => ({
    currentModel: {
        id: 'model',
        src: `./xkt/model.xkt`,
        // metaModelSrc: `./xkt/model.json`,
        edges: true,
        performacne: true,
    },
    updateCurrentModel: (value) => set(produce(state => {
        state.currentModel = {...value};
    })),
    isLoading: false,
    setIsLoading: (value) => set(produce(state => {
        state.isLoading = value;
    }))
}))

export default store