export default (stateDefault, props) => ({
    on: {
        ...stateDefault.on,
        ...props.states.on,
    },
    off: {
        ...stateDefault.off,
        ...props.states.off,
    },
});
