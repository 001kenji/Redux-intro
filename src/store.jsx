import { createStore } from "redux";
import { rootReducer } from "./utils/redux/reducers";
 const Store = createStore(rootReducer)

export default Store

