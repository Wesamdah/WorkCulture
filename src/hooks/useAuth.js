import { useContext } from "react";
import AuthContext from "../provider/AuthProvider";

export default function UseAuth() {
  return useContext(AuthContext);
}
