import { ADD_GOAL } from "../actions/goals";
import { ADD_TODO } from "../actions/todos";

const checker = (store) => (next) => (action) => {
    if (
        action.type === ADD_TODO &&
        action.todo.name.toLowerCase().indexOf('bitcoin') !== -1
    ) {
        return alert("Nope. That's a bad idea.");
    }
    if (
        action.type === ADD_GOAL &&
        action.goal.name.toLowerCase().indexOf('bitcoin') !== -1
    ) {
        return alert("Nope. That's a bad idea.");
    }
    if (action.type === ADD_GOAL && action.goal.name.length === 0) {
        return alert("Nope. Trying to add empty goal.");
    }
    if (action.type === ADD_TODO && action.todo.name.length === 0) {
        return alert("Nope. Trying to add empty todo.");
    }
    return next(action)
};

export default checker;
