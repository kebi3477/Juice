let state = {};
const setState = e => {
    state[e.target.name] = e.target.value
}
export {state, setState};